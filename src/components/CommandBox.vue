<template>
  <div class="command-section">
    <input
      v-model="commandInput"
      @keyup.enter="executeCommand"
      id="commands"
      type="text"
      placeholder="Enter command"
    />
    <button @click="executeCommand" id="execute">Execute</button>
  </div>
</template>

<script>
export default {
  name: "CommandBox",
  data() {
    return {
      commandInput: "",
    };
  },
  methods: {
    executeCommand() {
      if (this.commandInput.trim()) {
        this.$emit("execute-command", this.commandInput);
        // this.commandInput = "";
      }
    },
  },
};
</script>
