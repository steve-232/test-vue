import { mount } from "@vue/test-utils";
import BaseTableRow from "@/components/base/BaseTableRow.vue"; // adjust path if needed

describe("BaseTableRow.vue", () => {
  it("should render a tr element", () => {
    const wrapper = mount(BaseTableRow);
    const row = wrapper.find("tr");

    expect(row.exists()).toBe(true);
  });

  it("should render slot content inside tr", () => {
    const wrapper = mount(BaseTableRow, {
      slots: {
        default: "<td>Row Content</td>",
      },
    });

    const row = wrapper.find("tr");
    expect(row.html()).toContain("<td>Row Content</td>");
  });

  it("should render empty tr when no slot content is provided", () => {
    const wrapper = mount(BaseTableRow);
    const row = wrapper.find("tr");

    expect(row.text()).toBe("");
  });
});
