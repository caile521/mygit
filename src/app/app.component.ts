import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import {trigger,state,transition,style,animate} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations:[
  //   //触发器
  //   trigger('square',
  // [//状态，就是定义状态
  //   state('green',style({'background-color':'green','height':'100px','transform':'translateY(-100%)'})),
  //   state('red',style({'background-color':'red','height':'100px','transform':'tanslateY(100%)'})),
  //  //tansition决定了从哪一个迁移到哪，是定义如何过渡
  //   transition('green=>red',animate('.8s ease-in')),//从绿到红
  //   transition('red=>green',animate('.8s ease-out')),//从红到绿
  // ])
  // ]
})
export class AppComponent {
  squareState:string;
  darkTheme = false;
  switchTheme(dark){//接收一个event,
    //就是组件emit时候发射出来的东西，通过父组件event就可以拿到它
    this.darkTheme = dark;
    //把本地的这个变量darkTheme等于我捕获到的这个事件
  }
  onClick(){
    this.squareState = this.squareState === 'red'?'green':'red';
  }
}
