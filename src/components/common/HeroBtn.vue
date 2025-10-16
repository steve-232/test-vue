<template>
  <BaseButton
    :type="type"
    :disabled="disabled"
    :loading="loading"
    class="hero-btn"
    ><slot></slot
  ></BaseButton>
</template>

<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";

interface Props {
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  loading?: boolean;
}

const {
  type = "button",
  disabled = false,
  loading = false,
} = defineProps<Props>();
</script>

<style scoped lang="scss">
button {
  padding: 14px 26px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--color-btn-bg);
  border: 1px solid var(--color-btn-border);
  transition: opacity 100ms linear 10ms;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}
</style>
