<template>
  <div class="header">
    <div class="user-text">Logged in as: {{ user.nickname }}</div>
    <button class="logout-button" @click="handleLogout">Log out</button>
  </div>
</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding-bottom: 1rem;
}
</style>
<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { logout, user } = useAuth0();

const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } });
};
</script>
<style>
.logout-button {
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(239, 68, 68, 0.3);
}

.logout-button:hover {
  background: #dc2626;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
}
</style>
