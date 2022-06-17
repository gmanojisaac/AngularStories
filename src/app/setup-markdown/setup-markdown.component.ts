import { Component, Input, Output, EventEmitter, OnInit, VERSION  } from '@angular/core';


@Component({
  selector: 'app-setup-markdown',
  templateUrl: './setup-markdown.component.html',
  styleUrls: ['./setup-markdown.component.css']
})
export class SetupMarkdownComponent implements OnInit {
@Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();
  angularVersion = VERSION.full;
	ngxMarkdownVersion = '12.0.1';
	markdown = `## Markdown __rulez__!
---
### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`
### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet
### Blockquote
> Blockquote to the max`;

  constructor() { }

  ngOnInit(): void {
  }

}
