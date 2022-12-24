// src/component/Button/Button.stories.tsx
import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ImageUpload, ImageUploadProps } from "./ImageUpload";

export default {
  title: "ImageUpload",
  component: ImageUpload,
  description: `A ImageUpload.`,
} as Meta;

const Template: Story<ImageUploadProps> = (args) => <ImageUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "image-upload",
  multiple: true,
};
