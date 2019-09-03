import { NgModule } from '@angular/core';//引入NgModule模块
import { RouterModule, Routes} from '@angular/router';//引入router模块
import { LoginComponent } from './login/login.component';//引入组件模块
import { RegisterComponent } from './register/register.component';
const routes : Routes = [
    {
     path:'login',component:LoginComponent
    },
    {
     path:'register',component:RegisterComponent
    }

];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LoginRoutingModule{}//导入是必须的，这样父组件的module才可以被引用