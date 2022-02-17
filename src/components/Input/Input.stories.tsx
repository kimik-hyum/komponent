// src/component/Button/Button.stories.tsx
import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  description: `Input.`,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    primary: { control: "boolean" },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => {
  return <Input label={"하이"} id={"id"} placeholder="아이디" />;
};
//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
// };

// export const CustomBackground = Template.bind({});
// CustomBackground.args = {
//   backgroundColor: "#A78BFA",
// };

// export const CustomFontColor = Template.bind({});
// CustomFontColor.args = {
//   color: "#1E40AF",
// };

// export const OnClick = Template.bind({});
// OnClick.args = {
//   // eslint-disable-next-line no-alert
//   onClick: () => alert("Clicked the button!"),
// };
