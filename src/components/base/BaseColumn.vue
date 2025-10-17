<template>
  <section class="column">
    <header
      v-if="title.length"
      class="column__header"
      :style="[{ textAlign, backgroundColor: headerBgColor }]"
    >
      <Title tag="h3">{{ title }}</Title>
    </header>
    <div class="column__content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
import Title from "@/components/common/Title.vue";

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
  &__header {
    padding: 15px 20px;
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-border-primary);
  }
  &__content {
    overflow-y: scroll;
  }
}
</style>
