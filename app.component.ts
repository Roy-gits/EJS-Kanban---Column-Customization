import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';

enableRipple(true);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('element') tabInstance: TabComponent;

  public data: Object[] = kanbanData;
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id',
  };

  //CUSTOM_COLORS
  public queryCellInfoHandler(args: any) {
    try {
      var headerElems1 = args.element.children;
      // args.element && args.element.children ? args.element.children : [];
      this.colorChildren(headerElems1);
    } catch (e) {
      console.log('error-in-header', e);
    }
  }

  public colorChildren(headerElems1) {
    Array.from(headerElems1).forEach((element) => {
      if (element['dataset'].key != undefined) {
        if (element['dataset'].key === 'Testing') {
          element['classList'].add('kpi-col-color');
        } else if (element['dataset'].key === 'Close') {
          element['classList'].add('execution-col-color');
        }
      }
    });
    let header = document.querySelector('.e-header-row');
    header.getElementsByTagName('th').item(3).style.backgroundColor =
      'rgba(255, 99, 88, 0.2)';
    // let data = document.getElementById('id-done');

    // let columns = document.querySelector('.e-header-row');
    // console.log('header', columns);
    // columns[3].className = 'execution-col-color';
    // columns[3].addClass = 'execution-col-color';
    // headerElems1[3].parentNode.cells[3].style.backgroundColor = 'red';

    // headerElems1[3].parentNode.cells.className= "execution-col-color"
  }
}
