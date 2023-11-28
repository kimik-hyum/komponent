import React from "react";
import Accordion from "../src/components/Accordion";

export default {
  title: "Example/Accordion",
  component: Accordion,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  tags: ["autodocs"],
};

// export const SimpleAccordion = () => (
//   <Accordion.Root>
//     <Accordion.Item value="1">
//       <Accordion.Trigger>Item 1</Accordion.Trigger>
//       <Accordion.Content>Content 1</Accordion.Content>
//     </Accordion.Item>

//     <Accordion.Item value="2">
//       <Accordion.Trigger>Item 2</Accordion.Trigger>
//       <Accordion.Content>Content 2</Accordion.Content>
//     </Accordion.Item>

//     <Accordion.Item value="3">
//       <Accordion.Trigger>Item 3</Accordion.Trigger>
//       <Accordion.Content>Content 3</Accordion.Content>
//     </Accordion.Item>
//   </Accordion.Root>
// );

const data = [
  { title: "Watercraft", content: "Sample accordion content", value: "1" },
  { title: "Automobiles", content: "Sample accordion content", value: "2" },
  { title: "Aircrafts", content: "Sample accordion content", value: "3" },
]

export const HeadlessAccordion = () => (

  <Accordion data={data} />

)
