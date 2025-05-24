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
  flex: 1;
  padding: 1rem 1.5rem;
  overflow-y: auto;
  background: #fafafa;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.85rem;
  line-height: 1.5;
}
</style>
