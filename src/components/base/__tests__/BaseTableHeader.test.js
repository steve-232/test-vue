import { mount } from "@vue/test-utils";
import BaseTableHeader from "@/components/base/BaseTableHeader.vue";

describe("BaseTableHeader.vue", () => {
  it("should render a th element", () => {
    const wrapper = mount(BaseTableHeader);
    const header = wrapper.find("th");

    expect(header.exists()).toBe(true);
  });

  it("should render slot content inside th", () => {
    const wrapper = mount(BaseTableHeader, {
      slots: {
        default: "Header Title",
      },
    });

    const header = wrapper.find("th");
    expect(header.text()).toBe("Header Title");
  });

  it("should render empty th when no slot is provided", () => {
    const wrapper = mount(BaseTableHeader);
    const header = wrapper.find("th");

    expect(header.text()).toBe("");
  });
});
