import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';//将这个data数据传递进来


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  title = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data, 
    private dialogRef:MatDialogRef<NewProjectComponent>,
) { }

  ngOnInit() {
    this.title = this.data.title;//接收传递过来的data数据，然后赋值给本地变量
    console.log(JSON.stringify(this.data));
  }
  onClick(){
    this.dialogRef.close('I received');
  }
}
