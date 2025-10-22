<template>
  <BaseRacePath
    :label="label"
    :animation-duration="horseSpeed"
    @animation-end="handleAnimationEnd"
  >
    <FontAwesomeIcon
      class="horse"
      :icon="faHorse"
      size="2xl"
      :color="horse.color"
    />
  </BaseRacePath>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHorse } from "@fortawesome/free-solid-svg-icons";
import BaseRacePath from "@/components/base/BaseRacePath.vue";
import type { Horse } from "@/ts";

interface Props {
  label?: string;
  horse: Horse;
}

const { label, horse } = defineProps<Props>();

const emit = defineEmits<{
  finishedTheRace: [horse: Horse];
}>();

const handleAnimationEnd = () => {
  emit("finishedTheRace", { ...horse });
};

const horseSpeed = computed(() => 1500 + (100 - horse.condition) * 10);
</script>
