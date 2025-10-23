import { mount } from "@vue/test-utils";
import BaseText from "@/components/base/BaseText.vue";

describe("BaseText.vue", () => {
  it("should render with default tag 'p'", () => {
    const wrapper = mount(BaseText, {
      slots: {
        default: "Hello world",
      },
    });

    const el = wrapper.find("p");
    expect(el.exists()).toBe(true);
    expect(el.text()).toBe("Hello world");
  });

  it("should render with provided valid tag", () => {
    const wrapper = mount(BaseText, {
      props: { tag: "span" },
      slots: {
        default: "Inline text",
      },
    });

    const el = wrapper.find("span");
    expect(el.exists()).toBe(true);
    expect(el.text()).toBe("Inline text");
  });

  it("should render nothing when no slot content is provided", () => {
    const wrapper = mount(BaseText);
    expect(wrapper.text()).toBe("");
  });

  it("should only accept valid tags via validator", () => {
    const { validator } = BaseText.props.tag;
    expect(validator("p")).toBe(true);
    expect(validator("span")).toBe(true);
    expect(validator("i")).toBe(true);
    expect(validator("b")).toBe(true);
    expect(validator("div")).toBe(false);
    expect(validator("h1")).toBe(false);
  });
});
