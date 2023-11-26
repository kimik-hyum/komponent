import React from "react";
import Textfield from "../src/components/headless/Textfield/Textfield";

export default {
  title: "Example/Textfield",
  component: Textfield,
  tags: ["autodocs"],
};

export const SimpleInput = () => <Textfield placeholder="아이디" />;
