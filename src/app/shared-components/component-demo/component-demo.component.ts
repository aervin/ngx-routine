import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.css']
})
export class ComponentDemoComponent {
  @Input() public componentSourceCode: string;
  @Input() public componentTemplateSourceCode: string;
  @Input() public demoTemplateSourceCode: string;
  @Input() public heading: string;
}
