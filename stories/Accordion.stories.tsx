import React from "react";
import * as Accordion from "../src/components/Accordion/index";
import { Text } from "../src/components/Text";

export default {
  title: "Example/Accordion",
  component: Accordion,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  tags: ["autodocs"],
};

export const SimpleAccordion = () => (
  <Accordion.Root>
    <Accordion.Item value="1" as="div">
      {({ active }) => {
        return (
          <>
            <Accordion.Trigger>Item 1</Accordion.Trigger>
            <Accordion.Content>
              <Text as="button" size={1} color="red">
                123
              </Text>
            </Accordion.Content>
          </>
        );
      }}
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
