import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
items = [
  {
    name:'zhangsan'
  },
  {
    name:'lisi'
  },
  {
    name:'wulian'
  }
];
  constructor() { }

  ngOnInit() {
  }
  displayUser(user:{name:string}){
     return user?user.name:'';
  }
 
}
