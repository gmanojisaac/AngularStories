// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { customers } from './../app-shared/mocks';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { SetupEnvComponent } from '../setup-env/setup-env.component';
import { MarkdownModule } from 'ngx-markdown';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Environment/Setup',
  component: SetupEnvComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
decorators: [
    moduleMetadata({
      imports: [
	BrowserAnimationsModule,
	BrowserModule,  
	RouterTestingModule, 	
	AppSharedModule,
	MarkdownModule.forRoot()
 	]
    }),
  ],} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SetupEnvComponent> = (args: SetupEnvComponent ) => ({
  component: SetupEnvComponent,
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