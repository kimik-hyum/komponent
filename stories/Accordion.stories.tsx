import React from "react";

import * as Accordion from "../src/components/Accordion";
import { AccordionRoot } from "../src/components/Accordion/Root";

export default {
  title: "Example/Accordion",
  component: AccordionRoot,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  tags: ["autodocs"],
};

export const SimpleAccordion = () => (
  <Accordion.Root>
    <Accordion.Item value="1">
      <Accordion.Trigger>Item 1</Accordion.Trigger>
      <Accordion.Content>Content 1</Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="2">
      <Accordion.Trigger>Item 2</Accordion.Trigger>
      <Accordion.Content>Content 2</Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="3">
      <Accordion.Trigger>Item 3</Accordion.Trigger>
      <Accordion.Content>Content 3</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);
