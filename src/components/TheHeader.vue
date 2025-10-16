<template>
  <header class="page-header">
    <Title tag="h2" class="page-header__title">Horse Racing</Title>

    <div class="page-header__actions">
      <HeroBtn>Generate program</HeroBtn>
      <HeroBtn>Start / pause</HeroBtn>
    </div>
  </header>
</template>
<script setup lang="ts">
import Title from "@/components/common/Title.vue";
import HeroBtn from "@/components/common/HeroBtn.vue";
</script>

<style scoped lang="scss">
.page-header {
  display: flex;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-header-bg);
  border-bottom: solid 1px var(--color-border-primary);

  &__title {
    margin: 0;
  }
  &__actions {
    display: flex;
    align-items: center;

    button {
      margin: 0 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
