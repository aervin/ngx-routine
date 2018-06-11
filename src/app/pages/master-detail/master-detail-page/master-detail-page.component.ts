import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-master-detail-page',
  templateUrl: './master-detail-page.component.html',
  styleUrls: ['./master-detail-page.component.css']
})
export class MasterDetailPageComponent {
  public static readonly COMPONENT_SOURCE_CODE_URL =
    'https://raw.githubusercontent.com/aervin/ngx-routine/master/projects/ngx-routine/src/lib/routine-master-detail/routine-master-detail.component.ts';
  public static readonly DEMO_TEMPLATE_SOURCE_CODE_URL =
    'https://raw.githubusercontent.com/aervin/ngx-routine/master/src/app/pages/master-detail/master-detail-page/master-detail-page.component.html';
  public componentSourceHtml: string;
  public demoSourceHtml: string;

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get(MasterDetailPageComponent.COMPONENT_SOURCE_CODE_URL, {
        observe: 'body',
        responseType: 'text'
      })
      .toPromise()
      .then(
        (rawSource: string) =>
          (this.componentSourceHtml = Prism.highlight(
            `\n${rawSource}`,
            Prism.languages.typescript,
            'typescript'
          ))
      );

    this.httpClient
      .get(MasterDetailPageComponent.DEMO_TEMPLATE_SOURCE_CODE_URL, {
        observe: 'body',
        responseType: 'text'
      })
      .toPromise()
      .then(
        (rawSource: string) =>
          (this.demoSourceHtml = Prism.highlight(
            `\n${rawSource}`,
            Prism.languages.markup,
            'markup'
          ))
      );
  }
}
