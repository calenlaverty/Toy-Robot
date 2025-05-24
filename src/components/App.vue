<template>
  <div>
    <Header />
    <Instructions />
    <CommandBox @execute-command="handleCommand" />
    <Grid
      :robot-position="robot?.state.position"
      :robot-direction="robot?.state.facing"
    />
    <OutputBox :messages="outputMessages" />
  </div>
</template>

<script>
import { InputHandler } from "../scripts/commands/input-handler";
import Header from "./Header.vue";
import Instructions from "./Instructions.vue";
import Grid from "./Grid.vue";
import CommandBox from "./CommandBox.vue";
import OutputBox from "./OutputBox.vue";

export default {
  name: "App",
  components: {
    Header,
    Instructions,
    Grid,
    CommandBox,
    OutputBox,
  },
  data() {
    return {
      robot: null,
      outputMessages: [],
    };
  },
  methods: {
    handleCommand(inputText) {
      try {
        const commandParts = inputText.toUpperCase().split(/[\s,]+/);
        const { message, robot } = InputHandler.process(
          commandParts,
          this.robot
        );
        this.robot = robot;
        this.addOutputMessage(message);
      } catch (error) {
        console.error("Error processing command:", error);
        this.addOutputMessage(error.message, true); // true = error
      }
    },

    addOutputMessage(message, isError = false) {
      const dateTime = new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });

      this.outputMessages.unshift({
        timestamp: dateTime,
        message: message,
        isError: isError,
      });
    },
  },
};
</script>
