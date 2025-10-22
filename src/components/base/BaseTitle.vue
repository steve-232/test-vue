<script lang="ts">
import { h } from "vue";

export default {
  props: {
    tag: {
      type: String,
      default: "h1",
      validator(value: string) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      },
    },
  },
  setup({ tag }, { slots }) {
    return () => h(tag, slots.default ? slots.default() : "");
  },
};
</script>
