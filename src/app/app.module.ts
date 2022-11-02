import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsPageModule } from './pages/products-page/products-page.module';
import { SharedModule } from './shared/shared/shared.module';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    ProductComponent,
    FooterComponent,
    SidemenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    HttpClientModule,
    LandingPageModule,
    ProductsPageModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
