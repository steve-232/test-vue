import { mount } from "@vue/test-utils";
import BaseTitle from "@/components/base/BaseTitle.vue";

describe("BaseTitle.vue", () => {
  it("should render with default tag 'h1'", () => {
    const wrapper = mount(BaseTitle, {
      slots: {
        default: "Main Title",
      },
    });

    const el = wrapper.find("h1");
    expect(el.exists()).toBe(true);
    expect(el.text()).toBe("Main Title");
  });

  it("should render with provided valid tag", () => {
    const wrapper = mount(BaseTitle, {
      props: { tag: "h3" },
      slots: {
        default: "Section Title",
      },
    });

    const el = wrapper.find("h3");
    expect(el.exists()).toBe(true);
    expect(el.text()).toBe("Section Title");
  });

  it("should render nothing when no slot content is provided", () => {
    const wrapper = mount(BaseTitle);
    expect(wrapper.text()).toBe("");
  });

  it("should only accept valid heading tags via validator", () => {
    const { validator } = BaseTitle.props.tag;
    expect(validator("h1")).toBe(true);
    expect(validator("h2")).toBe(true);
    expect(validator("h3")).toBe(true);
    expect(validator("h4")).toBe(true);
    expect(validator("h5")).toBe(true);
    expect(validator("h6")).toBe(true);
    expect(validator("p")).toBe(false);
    expect(validator("div")).toBe(false);
  });
});
