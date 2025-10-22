<template>
  <div class="table-score-position">
    <header v-if="title?.length" class="table-score-position__header">
      <BaseTitle tag="h4">{{ title }}</BaseTitle>
    </header>
    <Table>
      <TableRow>
        <TableHeader>Position</TableHeader>
        <TableHeader>Name</TableHeader>
      </TableRow>
      <TableRow v-for="item in data" :key="item.id">
        <TableCell>{{ item.position }}</TableCell>
        <TableCell>{{ item.name }}</TableCell>
      </TableRow>
    </Table>
  </div>
</template>

<script setup lang="ts">
import Table from "@/components/base/BaseTable.vue";
import TableRow from "@/components/base/BaseTableRow.vue";
import TableHeader from "@/components/base/BaseTableHeader.vue";
import TableCell from "@/components/base/BaseTableCell.vue";
import BaseTitle from "@/components/base/BaseTitle.vue";
import type { TableScorePositionItem } from "@/ts";

interface Props {
  data: TableScorePositionItem[];
  title?: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.table-score-position {
  &__header {
    padding: 8px 0;
    text-align: center;
    background-color: var(--color-header-bg-secondary);
  }
}
</style>
