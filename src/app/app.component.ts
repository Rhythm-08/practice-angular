import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren, isDevMode } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'sampleAngularProj';
  name="Rhythm"
  ngOnInit(){
    if(isDevMode()){
      console.log('Dev Mode')
    }
    else {
      console.log('{Production Mode}');
    }

  }
  @ViewChild(ViewChildComponent,{static:false}) hello!:ViewChildComponent
@ViewChildren(ViewChildComponent) hellos!:QueryList<ViewChildrenComponent>;

  ngAfterViewInit() {
    console.log("Hello ", this.hello.name);
    console.log('View Children', this.hellos)
  }
}
