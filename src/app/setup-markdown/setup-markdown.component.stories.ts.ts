// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { customers } from './../app-shared/mocks';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { SetupMarkdownComponent } from '../setup-markdown/setup-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';
import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';

import 'prismjs/themes/prism-dark.css';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Environment/Markdown',
  component: SetupMarkdownComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
decorators: [
    moduleMetadata({
      imports: [CommonModule, BrowserModule , RouterTestingModule, AppSharedModule, MarkdownModule.forRoot()]
    }),
  ],} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SetupMarkdownComponent> = (args: SetupMarkdownComponent) => ({
  component: SetupMarkdownComponent,
  props: args,
});

export const Overview = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Overview.args = { customers };

export const Desktop = Template.bind({});
Desktop.args = { customers: customers.slice(0,10) };

export const Stackblitz = Template.bind({});
Stackblitz.args =  { customers: customers.slice(0,4) };

export const Github = Template.bind({});
Github.args  = { customers: [] };