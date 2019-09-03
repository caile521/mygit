import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';//将这个data数据传递进来

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss']
})
export class CopyTaskComponent implements OnInit {
lists:any[];
  constructor(
    @Inject( MAT_DIALOG_DATA) private data,
       private dialogRef:MatDialogRef<CopyTaskComponent>//在关闭的时候调用者去传递数据
     ) { }

  ngOnInit() {
    this.lists = this.data.lists;//导入字典里面Lists这个值
  }

}
