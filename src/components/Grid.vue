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
        <template v-if="isRobotAt(cell)">
          <div class="direction-arrow"></div>
          <span class="robot-body">🤖</span>
        </template>
        <template v-else>
          <span class="coordinates">{{ cell.x }},{{ cell.y }}</span>
        </template>
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
    isRobotAt(cell: Coordinate): boolean {
      return (
        this.robotPosition &&
        this.robotPosition.x === cell.x &&
        this.robotPosition.y === cell.y
      );
    },
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
  grid-template-columns: repeat(5, 80px);
  grid-template-rows: repeat(5, 80px);
  gap: 2px;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
}

.cell {
  background: white;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cell:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.coordinates {
  font-size: 0.75rem;
  color: #718096;
  position: absolute;
  top: 2px;
  left: 4px;
  font-weight: 500;
}

.robot {
  background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
  border-color: #e17055;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.robot-body {
  font-size: 1.5rem;
  z-index: 2;
  position: relative;
}

.direction-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 12px solid #2d3748;
  top: -8px;
  opacity: 0.8;
}

.robot.north .direction-arrow {
  transform: rotate(0deg);
}

.robot.east .direction-arrow {
  transform: rotate(90deg);
}

.robot.south .direction-arrow {
  transform: rotate(180deg);
}

.robot.west .direction-arrow {
  transform: rotate(270deg);
}
</style>
