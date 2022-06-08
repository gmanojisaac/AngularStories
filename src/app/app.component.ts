
	import { Component, OnInit, VERSION } from '@angular/core';
	import mermaid from 'mermaid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularStories';
ngOnInit(): void {
    mermaid.initialize({
      securityLevel: 'loose'
    });
    mermaid.init();
  }

}
