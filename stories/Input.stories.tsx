import React from "react";
import Input from "../src/components/Input/Input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  tags: ["autodocs"],
};

export const SimpleInput = () => (
  <Input label={"하이"} id={"id"} placeholder="아이디" />
);
