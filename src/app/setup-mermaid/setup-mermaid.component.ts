import { Component, Input, Output, EventEmitter, OnInit, VERSION  } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-setup-mermaid',
  templateUrl: './setup-mermaid.component.html',
  styleUrls: ['./setup-mermaid.component.css']
})
export class SetupMermaidComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
    mermaid.initialize({
      securityLevel: 'loose'
    });
    mermaid.init();
  }


}
