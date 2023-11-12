import type { Preview } from "@storybook/react";
import React from "react";
import { Title, Subtitle, Description, Primary, Controls, Stories  } from '@storybook/blocks';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // 定义文档的格式排版
      // page: () => (
      //   <>
      //     标题前缀
      //     <Title/>
      //     标题后缀
      //     <Subtitle/>
      //     <Description/>
      //     <Primary/>
      //     <Controls/>
      //     <Stories/>
      //   </>
      // ),
      page: () => (
        <>
          <Primary/>
          <Title/>
          <Controls/>
        </>
      )
    }
  },
};

export default preview;
