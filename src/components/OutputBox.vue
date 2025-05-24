<template>
  <div class="output-section">
    <h3>Output</h3>
    <div id="output" class="output-content">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="{ 'error-message': msg.isError }"
      >
        {{ msg.timestamp }} - {{ msg.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutputBox",
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.output-content {
  background: #f5f5f5;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
  font-family: monospace;
  white-space: pre-line;
}

.error-message {
  color: red;
}
</style>
