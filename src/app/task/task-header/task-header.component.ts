import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input()
  header = '';
  @Output()
  newTask = new EventEmitter<void>();
  @Output()
  moveAll = new EventEmitter<void>();//越笨服务性越强
  @Output()
  delTask = new EventEmitter<void>();
  @Output()
  onEditList = new EventEmitter<void>();
//  newTask:EventEmitter = new EventEmitter<void>()
  //EventEmitter对象后面的这个<void>泛型你要发射的这个事件的数据是什么类型
  constructor() { }

  ngOnInit() {
  }
  onNewTaskClick(event){//当我单击按钮的时候向外发射一个事件
  this.newTask.emit();
  //用emit一个值数据，这个值就是newTask,
  //当我用emit向外发射一个事件的时候，我发射的就需要是这个泛型所指定的这个类型的变量数据<void>
  //把它发射出去就可以了，不管谁去接收
  }
  onMoveAllClick(){
   this.moveAll.emit();
  }
  onDelTaskClick(){
   this.delTask.emit();
  }
  onEditListClick(){
    this.onEditList.emit();
  }
}
