import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output()
  taskClick = new EventEmitter<void>();
  constructor() { }
  
  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar :'unassigned';
  }
  onItemClick(){
    this.taskClick.emit();
  }
  onChecBoxClick(ev:Event){
    //不继续往外传多了，阻止了其他人往外传递这个事件
     ev.stopPropagation();
  }
}
