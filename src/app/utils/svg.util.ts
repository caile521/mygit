import { MatIconRegistry, MatIcon } from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';//通过使用图标字体，通过注入两个模块完成
export const loadSvgResources = (ir:MatIconRegistry,ds:DomSanitizer) => {
    const sidebarDir = 'assets/sidebar';//侧边栏的
    const dayDir = 'assets/days';//侧边栏日历里面的
    const avtarDir = 'assets/avatar';//头像
    const iconDir = 'assets/icons';
   //加上一个图标的集合
    ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl(`${avtarDir}/avatars.svg`));
    ir.addSvgIcon('day',ds.bypassSecurityTrustResourceUrl(`${avtarDir}/day.svg`));
    ir.addSvgIcon('unassigned',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));
    ir.addSvgIcon('month',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
    ir.addSvgIcon('project',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`));
    ir.addSvgIcon('projects',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
    ir.addSvgIcon('week',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
    ir.addSvgIcon('move',ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
    ir.addSvgIcon('add',ds.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
    ir.addSvgIcon('delete',ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
    const days = [
        1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,31
    ];
    days.forEach(d => ir.addSvgIcon(`day${d}`,ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${d}.svg`)));
}