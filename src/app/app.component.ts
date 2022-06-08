
import { Component, OnInit, VERSION } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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

  title = 'AngularStories';
ngOnInit(): void {
    mermaid.initialize({
      securityLevel: 'loose'
    });
    mermaid.init();
  }

}
