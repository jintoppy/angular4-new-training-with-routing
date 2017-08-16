import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { AutocompleteComponent } from './pages/autocomplete/autocomplete.component';
import { StateService } from './state.service';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'product/:productName',
    component: ProductDetailsComponent
  },
  {
    path: 'autocompletedemo',
    component: AutocompleteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductDetailsComponent,
    FooterComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
