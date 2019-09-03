import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
 divClass:any;
projects= [
{
  "name":"企业写作平台",
  "desc":"这是一个企业内部项目",
  "coverImg":"../assets/covers/0.jpg"
},
{
  "name":"企业写作平台",
  "desc":"这是一个企业内部项目",
  "coverImg":"../assets/covers/1.jpg"
}
];
  constructor(private dialog:MatDialog) { 
    this.divClass = {
      card:true
    }
  }

  ngOnInit() {
  }
  //单击按钮
  openNewProjectDialog(){
   const dialogRef = this.dialog.open(NewProjectComponent,{data:{title:'新增项目'}});
   dialogRef.afterClosed().subscribe(result => console.log(result));//然后我们可以得到这样的一个result
  }
  LaunchInviteDialog(){
    //监听的事件
    const dialogRef = this.dialog.open(InviteComponent);
  }
  LaunchUpdateDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{title:'编辑项目：'}});
  }
  LaunchMoceDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title:'删除项目',content:'您确认删除该项目?'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
