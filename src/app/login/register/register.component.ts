import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  items:string[];//声明一个数据用来循环头像
  avatarClass:any = {//样式，可以定义多个，any任意类型
    avatar:true
  };
  constructor() { }

  ngOnInit() {
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    this.items = nums.map(d => `avatars:svg-${d}`);
    //d是参数就是nums数组当中的每一个元素有16个头像，然后return一个`avatars:svg-${d}`，返回回来的是带字符串的数组了
    //map是对nums数组里面的元素进行处理,返回一个新的数组
   
  }

}
