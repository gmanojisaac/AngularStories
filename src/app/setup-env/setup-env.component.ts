import { Component, Input, Output, EventEmitter, OnInit, VERSION  } from '@angular/core';

import mermaid from 'mermaid';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-setup-env',
  templateUrl: './setup-env.component.html',
  styleUrls: ['./setup-env.component.css']
})
export class SetupEnvComponent implements OnInit {

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

