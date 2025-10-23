<template>
  <section class="column">
    <header
      v-if="title.length"
      class="column__header"
      data-testid="column-header"
      :style="[{ textAlign, backgroundColor: headerBgColor }]"
    >
      <BaseTitle tag="h3">{{ title }}</BaseTitle>
    </header>
    <div class="column__content" data-testid="column-content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseTitle from "@/components/base/BaseTitle.vue";

interface Props {
  title?: string;
  textAlign?: "center" | "right" | "left";
  headerBgColor?: string;
}

const {
  title = "",
  textAlign = "left",
  headerBgColor = "#fff",
} = defineProps<Props>();
</script>

<style scoped lang="scss">
.column {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;

  &__header {
    padding: 15px 20px;
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-border-primary);
  }
  &__content {
    overflow-y: auto;
  }
}
</style>
