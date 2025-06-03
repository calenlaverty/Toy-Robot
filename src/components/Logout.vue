<template>
  <div>
    <button class="logout-button" @click="logout">Log out</button>
  </div>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { logout } = useAuth0();

    return {
      logout: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      },
    };
  },
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
