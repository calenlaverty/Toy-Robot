<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "Hello Vue with TypeScript!",
    };
  },
});
</script>
