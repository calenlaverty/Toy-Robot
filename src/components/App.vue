<template>
  <div v-if="!isAuthenticated">
    <Login />
  </div>
  <div v-if="isAuthenticated">
    <Header />
    <Logout />
    <CommandBox @execute-command="handleCommand" />
    <Grid
      :robot-position="robot?.state.position"
      :robot-direction="robot?.state.facing"
    />
    <OutputBox :messages="outputMessages" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { InputHandler } from "../scripts/commands/input-handler";
import Header from "./Header.vue";
import Grid from "./Grid.vue";
import CommandBox from "./CommandBox.vue";
import OutputBox from "./OutputBox.vue";
import Login from "./Login.vue";
import Logout from "./Logout.vue";

// Auth0
const { isAuthenticated, isLoading } = useAuth0();

// Reactive data
const robot = ref(null);
const outputMessages = ref([]);

// Methods
const handleCommand = (inputText) => {
  try {
    const commandParts = inputText.toUpperCase().split(/[\s,]+/);
    const { message, robot: newRobot } = InputHandler.process(
      commandParts,
      robot.value
    );
    robot.value = newRobot;
    addOutputMessage(message);
  } catch (error) {
    console.error("Error processing command:", error);
    addOutputMessage(error.message, true);
  }
};

const addOutputMessage = (message, isError = false) => {
  const dateTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  outputMessages.value.unshift({
    timestamp: dateTime,
    message: message,
    isError: isError,
  });
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  color: #2d3748;
  line-height: 1.6;
}

#app {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;
}

.main-content {
  width: 100%;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.right-column {
  position: sticky;
  top: 1rem;
}
</style>
