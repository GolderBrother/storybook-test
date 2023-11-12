import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button组件',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    backgrounds: {
      values: [{
        name: '红',
        value: 'red'
      }, {
        name: '蓝',
        value: 'blue'
      }]
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    // backgroundColor: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const James: Story = {
  args: {
    label: 'james',
    size: 'large',
    backgroundColor: 'orange'
  }
};

export const James2: Story = {
  args: {
    label: 'james2',
    size: 'large',
    backgroundColor: 'orange'
  },
  // 通过 render 函数自定义渲染内容
  render(args, meta) {
    const list = meta.loaded.list.join(',');
    return <div>
      <header>header</header>
      <span>{list}</span>
      <Button  {...args} />
      <footer>footer</footer>
    </div>
  },
  // 通过 play 指定自动执行的脚本
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 找到内容为【james2】的 button，点击，然后把它的内容改为james2。
    // 组件渲染完就会自动执行 play 函数
    const btn = await canvas.getByRole('button', {
      name: /james2/i
    });
    console.log('btn', btn);
    if (btn) {
      await userEvent.click(btn);
      btn.textContent = 'zhang';
    }

    // play 函数是可以当作测试脚本来用的
    // 可以用来做测试
    await expect(btn.textContent).toEqual('zhang');
    await expect(btn.style.backgroundColor).toEqual('orange');
    await expect(btn.style.backgroundColor).toEqual('blue');
  },
  // 通过 loaders 请求数据
  loaders: [
    async () => {
      const sleep = (delay = 100) => new Promise((resolve, reject) => setTimeout(resolve, delay));
      await sleep(1000);
      return {
        list: new Array(10).fill(null).map((_, index) => index)
      };
    }
  ]
};