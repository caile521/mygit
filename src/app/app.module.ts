import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule, } from '@angular/material';
import { CoreModule  } from './core/core.module';//直接命名为index就可以了
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing_module';
import { LoginModule } from './login/login.module';
import { SharedModule  } from './shared/shared.module';
import { ProjectModule } from './project/project.module';
import { MatDialogModule} from '@angular/material/dialog';
import { TaskModule } from './task/task.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    MatSidenavModule,
    SharedModule,
    ProjectModule,
    MatDialogModule,
    TaskModule,
    BrowserAnimationsModule,
  ],
  providers: [],//依赖注入
  bootstrap: [AppComponent]
})
export class AppModule { }
