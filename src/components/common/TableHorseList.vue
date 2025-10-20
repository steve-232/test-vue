<template>
  <Table>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Condition</TableHeader>
      <TableHeader>Color</TableHeader>
    </TableRow>
    <TableRow v-for="horse in data" :key="horse.id">
      <TableCell>{{ horse.name }}</TableCell>
      <TableCell>{{ horse.condition }}</TableCell>
      <TableCell :style="[{ color: horse.color }]">{{ horse.color }}</TableCell>
    </TableRow>
  </Table>
</template>

<script setup lang="ts">
import type { Horse } from "@/ts";

import Table from "@/components/base/BaseTable.vue";
import TableHeader from "@/components/base/BaseTableHeader.vue";
import TableRow from "@/components/base/BaseTableRow.vue";
import TableCell from "@/components/base/BaseTableCell.vue";

interface Props {
  data: Horse[];
}

defineProps<Props>();
</script>
