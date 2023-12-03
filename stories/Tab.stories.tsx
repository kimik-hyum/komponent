import React from "react";

import Tab from "../src/components/Tabs/Tab";

export default {
  title: "Example/Tab",
  component: Tab,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  tags: ["autodocs"],
};

const tabData = [
  { value: "tab1", label: "Tab 1" },
  { value: "tab2", label: "Tab 2" },
  { value: "tab3", label: "Tab 3" },
  { value: "tab4", label: "Tab 4" },
];

export const Tabs = () => <Tab data={tabData} />;
