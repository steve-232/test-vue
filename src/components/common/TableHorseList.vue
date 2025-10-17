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
      <TableCell>{{ horse.color }}</TableCell>
    </TableRow>
  </Table>
</template>

<script setup lang="ts">
import Table from "@/components/base/BaseTable.vue";
import TableRow from "@/components/base/BaseTableRow.vue";
import TableHeader from "@/components/base/BaseTableHeader.vue";
import TableCell from "@/components/base/BaseTableCell.vue";
import type { Horse } from "@/ts";

interface Props {
  data: Horse[];
}

defineProps<Props>();
</script>
