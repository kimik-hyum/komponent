import React from "react";

import TabsAndToggleButton from "../src/components/Tabs/TabsAndToggleButton";

export default {
  title: "Example/Tab",
  component: TabsAndToggleButton,
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

export const Tabs = () => <TabsAndToggleButton data={tabData} />;
