import { mount } from "@vue/test-utils";
import BaseTableCell from "@/components/base/BaseTableCell.vue";

describe("BaseTableCell.vue", () => {
  it("should render a td element", () => {
    const wrapper = mount(BaseTableCell);
    const cell = wrapper.find("td");

    expect(cell.exists()).toBe(true);
  });

  it("should render slot content inside td", () => {
    const wrapper = mount(BaseTableCell, {
      slots: {
        default: "Cell Content",
      },
    });

    const cell = wrapper.find("td");
    expect(cell.text()).toBe("Cell Content");
  });

  it("should render empty td when no slot is provided", () => {
    const wrapper = mount(BaseTableCell);
    const cell = wrapper.find("td");

    expect(cell.text()).toBe("");
  });
});
