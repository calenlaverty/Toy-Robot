<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <div class="robot-icon">🤖</div>
        <h1>Toy Robot Simulator</h1>
      </div>
      <div class="subtitle">
        Control your robot on a 5x5 grid with simple commands
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header-content {
  text-align: center;
}

.robot-icon {
  font-size: 2.5rem;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
</style>
