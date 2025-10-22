<template>
  <section class="hippodrome">
    <div class="hippodrome__content">
      <HippodromeHorse
        label="1"
        :horse="{ id: 1, name: 'Blaze', condition: 50, color: 'Lime' }"
      />
      <HippodromeHorse
        label="2"
        :horse="{ id: 2, name: 'Blaze', condition: 30, color: 'Crimson' }"
      />
      <HippodromeHorse
        label="3"
        :horse="{ id: 2, name: 'Blaze', condition: 70, color: 'Salmon' }"
      />
    </div>
    <div class="hippodrome__footer">Lap 1 - 1200m <span>Finish</span></div>
  </section>
</template>

<script setup lang="ts">
import HippodromeHorse from "@/components/hippodrome/HippodromeHorse.vue";
</script>

<style scoped lang="scss">
.hippodrome {
  padding: 0 50px 0 30px;
  box-sizing: border-box;

  &__content {
    border-right: solid 4px var(--color-warning);
  }
  &__footer {
    position: relative;
    padding: 14px 0;
    text-align: center;
    color: var(--color-warning);
    font-weight: bold;

    span {
      position: absolute;
      right: -20px;
    }
  }

  :deep(.race-path:last-child) {
    .race-path__position {
      border-bottom: 2px solid var(--color-secondary);
    }
    .race-path__content {
      border-bottom: 2px dashed var(--color-primary);
    }
  }
}
</style>
