import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() 
  toggle = new EventEmitter<void>();//输出属性
  @Output()
  // toggleDarkTheme = new EventEmitter<boolean>();//给这个事件发射出来
  toggleDarkTheme:EventEmitter<boolean> = new EventEmitter();
  //EventEmitter这个对象后面的这个<boolean> 泛型你要往出去发射的这个事件的数据
  //是什么类型的，发射事件的数据类型就是我选中的黑暗模式
  constructor() { 
               
              }

  ngOnInit() {
  }
  openSidebar(){
   this.toggle.emit()//然后我们去发射事件
  }
 onChange(checked:boolean){//当我点击按钮的时候往外发射一个事件，
  //告诉外部若有人点了这个按钮checked
  //把它发射出去就行了，不管谁去接收
    this.toggleDarkTheme.emit(checked);//然后我们去发射事件
 }
  
}
