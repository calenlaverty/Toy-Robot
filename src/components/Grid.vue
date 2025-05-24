<template>
  <div class="grid-section">
    <h2>Grid (5x5)</h2>
    <div class="grid" ref="gridContainer">
      <div
        v-for="cell in gridCells"
        :key="`${cell.x}-${cell.y}`"
        :class="getCellClasses(cell)"
        class="cell"
      >
        {{ cell.x }},{{ cell.y }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DirectionType, Coordinate } from "../scripts/utils/types";
import { PropType } from "vue";

export default {
  name: "Grid",
  props: {
    robotPosition: {
      type: Object as PropType<Coordinate>,
      default: null,
    },
    robotDirection: {
      type: String as PropType<DirectionType>,
      default: "NORTH",
    },
  },
  data() {
    return {
      xLen: 5,
      yLen: 5,
    };
  },
  computed: {
    gridCells(): Coordinate[] {
      const cells: Coordinate[] = [];
      for (let y = this.yLen - 1; y >= 0; y--) {
        for (let x = 0; x < this.xLen; x++) {
          cells.push({ x, y });
        }
      }
      return cells;
    },
  },
  methods: {
    getCellClasses(cell: Coordinate) {
      const classes: string[] = [];

      if (
        this.robotPosition &&
        this.robotPosition.x === cell.x &&
        this.robotPosition.y === cell.y
      ) {
        classes.push("robot");
        if (this.robotDirection) {
          classes.push(this.robotDirection.toLowerCase());
        }
      }

      return classes;
    },
    validatePosition(pos: Coordinate) {
      if (
        pos.x < 0 ||
        pos.x > this.xLen - 1 ||
        pos.y < 0 ||
        pos.y > this.yLen - 1
      ) {
        throw new Error("Position is not valid");
      }
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;
}

.cell {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.cell.robot {
  background-color: #4caf50;
  color: white;
}

.cell.north {
  border-top: 3px solid red;
}
.cell.south {
  border-bottom: 3px solid red;
}
.cell.east {
  border-right: 3px solid red;
}
.cell.west {
  border-left: 3px solid red;
}
</style>
