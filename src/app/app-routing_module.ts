import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '',redirectTo:'/login',pathMatch:'full'},
    { path:'project',redirectTo:'/project',pathMatch:'full'},
    { path:'task',redirectTo:'/task',pathMatch:'full'}
    //根路径的情况下,如果斜线后面什么都不放,它就会导航到login
    //重定向路由，当我访问空路径的时候，把当前的路由重定向到login上面
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}//记得导入，app.module.ts才能够引入
