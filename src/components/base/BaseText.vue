<script lang="ts">
import { h } from "vue";

export default {
  props: {
    tag: {
      type: String,
      default: "p",
      validator(value: string) {
        return ["p", "span", "i", "b"].includes(value);
      },
    },
  },
  setup({ tag }, { slots }) {
    return () => h(tag, slots.default ? slots.default() : "");
  },
};
</script>
