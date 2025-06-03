<template>
  <div class="command-section">
    <div class="command-input-section">
      <label for="command" class="input-label">
        Enter command (one per line):
      </label>
      <textarea
        id="command"
        v-model="commandInput"
        class="command-textarea"
        placeholder="PLACE 0,0,NORTH&#10;MOVE&#10;RIGHT&#10;MOVE&#10;REPORT"
        @input="$emit('update:command', command)"
      ></textarea>

      <button @click="execute" id="execute" class="execute-button">
        <span class="button-icon">▶️</span>
        Execute command
      </button>

      <div class="quick-command">
        <h3 class="quick-title">Quick command:</h3>
        <div class="command-buttons">
          <button
            v-for="cmd in quickcommand"
            :key="cmd.name"
            @click="addCommand(cmd.command)"
            class="quick-button"
            :title="cmd.description"
          >
            {{ cmd.name }}
          </button>
        </div>
      </div>
    </div>
    <div class="command-help">
      <details>
        <summary class="help-summary">📖 Command Reference</summary>
        <div class="help-content">
          <div class="help-item">
            <code>PLACE X,Y,F</code>
            <span
              >Place robot at position (X,Y) facing F
              (NORTH/SOUTH/EAST/WEST)</span
            >
          </div>
          <div class="help-item">
            <code>MOVE</code>
            <span>Move robot one step forward</span>
          </div>
          <div class="help-item">
            <code>LEFT</code>
            <span>Rotate robot 90° counter-clockwise</span>
          </div>
          <div class="help-item">
            <code>RIGHT</code>
            <span>Rotate robot 90° clockwise</span>
          </div>
          <div class="help-item">
            <code>REPORT</code>
            <span>Output current position and direction</span>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandBox",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      command: this.modelValue,
      commandInput: "",
      quickcommand: [
        { name: "MOVE", command: "MOVE", description: "Move forward one step" },
        { name: "LEFT", command: "LEFT", description: "Turn left 90°" },
        { name: "RIGHT", command: "RIGHT", description: "Turn right 90°" },
        {
          name: "REPORT",
          command: "REPORT",
          description: "Show current position",
        },
        {
          name: "PLACE 0,0,NORTH",
          command: "PLACE 0,0,NORTH",
          description: "Place at origin facing north",
        },
      ],
    };
  },
  watch: {
    modelValue(newVal) {
      this.command = newVal;
    },
  },
  methods: {
    execute() {
      if (this.commandInput.trim()) {
        this.$emit("execute-command", this.commandInput);
        this.commandInput = "";
      }
    },
    addCommand(command) {
      if (this.command && !this.command.endsWith("\n")) {
        this.command += "\n";
      }
      this.commandInput += command;
      this.$emit("update:command", this.command);
    },
  },
};
</script>

<style scoped>
.command-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  height: fit-content;
}

.command-title {
  margin: 0 0 1.5rem 0;
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 600;
}

.command-input-section {
  margin-bottom: 1.5rem;
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-weight: 500;
  font-size: 0.9rem;
}

.command-textarea {
  width: 100%;
  height: 150px;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: #fafafa;
}

.command-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background: white;
}

.execute-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.execute-button:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
}

.execute-button:active:not(.disabled) {
  transform: translateY(0);
}

.execute-button.disabled {
  background: #cbd5e0;
  cursor: not-allowed;
  opacity: 0.6;
}

.button-icon {
  font-size: 0.9rem;
}

.quick-command {
  margin-bottom: 1.5rem;
}

.quick-title {
  margin: 0 0 0.75rem 0;
  color: #4a5568;
  font-size: 1rem;
  font-weight: 500;
}

.command-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.quick-button {
  padding: 0.5rem 0.75rem;
  background: #f7fafc;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
}

.quick-button:hover {
  background: #edf2f7;
  border-color: #cbd5e0;
  transform: translateY(-1px);
}

.command-help {
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
}

.help-details {
  cursor: pointer;
}

.help-summary {
  color: #4a5568;
  font-weight: 500;
  padding: 0.5rem 0;
  list-style: none;
  outline: none;
}

.help-summary::-webkit-details-marker {
  display: none;
}

.help-content {
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.help-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  background: #f7fafc;
  border-radius: 4px;
}

.help-item code {
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  background: #e2e8f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #2d3748;
  font-weight: 600;
  width: fit-content;
}

.help-item span {
  font-size: 0.85rem;
  color: #718096;
}
details {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
  background: #f9f9f9;
}

details[open] {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

summary {
  font-weight: 600;
  cursor: pointer;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 12px;
}

summary:hover {
  color: #0066cc;
}
</style>
