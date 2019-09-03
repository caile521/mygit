import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { fadeInItems } from '@angular/material';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
//定义一个输入型的变量
@Input()
item;
@Output()
onInvite = new EventEmitter<void>();
@Output()
onEdit = new EventEmitter<void>();
@Output()
onMove = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onInviteClick(){
   this.onInvite.emit();//将这个事件里面的东西发射出去
  }
  onEditClick(){
  this.onEdit.emit();
  }
  onMoveClick(){
  this.onMove.emit();
  }
}
