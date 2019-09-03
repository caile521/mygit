import { Component, OnInit } from '@angular/core';
import { getDate } from 'date-fns';//这个是取的这个月几号
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 public today = 'day';
  constructor() { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;//使用的是es6模板字符串，还用反引号标识``
    //字符串中嵌入变量，拼接使用$,然后放在代码块中{},代码块只对当前区域有效
    //取的是这个月的第几号，接收一个日期型的参数new Date,当前日期
  }

}
