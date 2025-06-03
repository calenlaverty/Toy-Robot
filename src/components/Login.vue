<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo">
        <div class="robot-icon">🤖</div>
        <h1>Toy Robot Simulator</h1>
      </div>
      <p class="login-subtitle">Username and password are both 'admin'</p>
      <button class="login-button" @click="login">Log in</button>
    </div>
  </div>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithRedirect } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
    };
  },
};
</script>
<style>
.login-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}
.robot-icon {
  font-size: 5rem;
}
.login-subtitle {
  color: #6b7280;
  margin-bottom: 2rem;
}
.login-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
  border-radius: 12px;
}
.login-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  text-align: center;
  max-width: 400px;
  width: 100%;
}
.login-button {
  width: 100%;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
}
.login-button:hover {
  background: #4338ca;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}
</style>
