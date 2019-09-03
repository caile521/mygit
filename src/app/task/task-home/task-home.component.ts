import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
lists;
  constructor(private dialog:MatDialog) { 
 this.lists = [
      {
        id:1,
        name:'代办',
        tasks:[
          {
            id:1,
            desc:'任务一：去星巴克买杯咖啡',
            completed:true,
            priority:3,
            owner:{
              id:1,
              name:'乐乐',
              avatar:'avatars:svg-11'
            },
            dueDate:new Date(),
            reminder:new Date()
          },
          {
            id:2,
            desc:'任务二：完成老师布置的ppt作业',
            completed:false,
            priority:2,
            owner:{
              id:1,
              name:'妈妈',
              avatar:'avatars:svg-12'
            },
            dueDate:new Date(),
          },
        ]
      },
      {
        id:2,
        name:'进行中',
        tasks:[
          {
            id:1,
            desc:'任务三：项目代码评审',
            completed:false,
            priority:1,
            owner:{
              id:1,
              name:'爸爸',
              avatar:'avatars:svg-13'
            },
            dueDate:new Date(),
          },
          {
            id:2,
            desc:'任务四：指定项目计划',
            completed:false,
            priority:2,
            owner:{
              id:1,
              name:'蔡',
              avatar:'avatars:svg-14'
            },
            dueDate:new Date(),
          },
        ]
      }
    ]
  }

  ngOnInit() {
  }

  launchNewTaskDiolog(event:void){//接收一个event,它就是void类型的
    const dialogRef = this.dialog.open(NewTaskComponent,{data:{title:'新建任务'}});//
    //就是子组件emit时候发射出来的newTask,打开窗口组件

  }
  //移动项目
  launchCopyTaskDiolog(){
     const dialogRef = this.dialog.open(CopyTaskComponent,{data:{lists:this.lists}});
     //在data中将lists数据传进去
  }
  launchUpdateTaskDialog(task){
    const dialogRef = this.dialog.open(NewTaskComponent,{data:{title:'修改任务',task:task}});
  }
  launchDelTaskDiolog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title:'修改任务列表',content:'您确定删除任务列表吗?'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchEditListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent,{data:{title:'更改列表名称:'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchNewTaskDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent,{data:{title:'新建列表名称:'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
