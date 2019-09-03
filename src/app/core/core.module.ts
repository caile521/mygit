import { NgModule,SkipSelf,Optional } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from '../utils/svg.util';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule, 
  ],
  exports:[
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    SharedModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
   ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent:CoreModule,
    ir:MatIconRegistry,
    ds:DomSanitizer){//意思是去父级寻找我的依赖
      if(parent){
        throw new Error('模块已经存在，不能再次加载!');
      }
      loadSvgResources(ir,ds);
  }
 }
