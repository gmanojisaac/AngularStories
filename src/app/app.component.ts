
import { Component, OnInit, VERSION } from '@angular/core';
import mermaid from 'mermaid';

import { Router, ActivatedRoute } from '@angular/router';


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
constructor(private route: ActivatedRoute, private router: Router){}

change3D(selected3D: number) {
    switch (selected3D) {
      case 1:
        this.router.navigate(['basicthree']);
        break;
      case 2:
        this.router.navigate(['items'], { relativeTo: this.route });
        break;
      case 3:
        this.router.navigate(['items'], { relativeTo: this.route });
        break;
      case 4:
        this.router.navigate(['items'], { relativeTo: this.route });
        break;
      case 5:
        this.router.navigate(['stories']);
        break;
    }
  }

}
