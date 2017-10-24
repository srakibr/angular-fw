import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {FrameworkBodyComponent} from './framework-body/framework-body.component';
import {ContentComponent} from './content/content.component';
import {TitleBarComponent} from './title-bar/title-bar.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {StatusBarComponent} from "./status-bar/status-bar.component";
import {MenuComponent} from "./menus/menu/menu.component";
import {MenuItemComponent} from "./menus/menu-item/menu-item.component";
import {PopupMenuComponent} from "./menus/popup-menu/popup-menu.component";
import {SignInComponent} from "./users/sign-in/sign-in.component";
import {RegisterUserComponent} from "./users/register-user/register-user.component";

import {ScreenService} from './services/screen.service';
import {MenuService} from './services/menu.service';
import {FrameworkConfigService} from "./services/framework-config.service";

import {ScreenLarge} from './directives/screen-large.directive';
import {ScreenBelowLarge} from './directives/screen-below-large.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [FrameworkBodyComponent,ContentComponent,TitleBarComponent,
    TopBarComponent,StatusBarComponent,ScreenLarge,ScreenBelowLarge,MenuComponent,
    MenuItemComponent,PopupMenuComponent,SignInComponent,RegisterUserComponent],
  providers:[FrameworkConfigService,ScreenService,MenuService],
  exports:[FrameworkBodyComponent,ContentComponent,TitleBarComponent, TopBarComponent,
    StatusBarComponent,MenuComponent,MenuItemComponent,PopupMenuComponent]
})
export class FwModule { }
