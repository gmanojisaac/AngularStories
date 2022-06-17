// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { customers } from './../app-shared/mocks';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { SetupMermaidComponent } from '../setup-mermaid/setup-mermaid.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Environment/Mermaid',
  component: SetupMermaidComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule, AppSharedModule]
    }),
  ],} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SetupMermaidComponent> = (args: SetupMermaidComponent) => ({
  component: SetupMermaidComponent,
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