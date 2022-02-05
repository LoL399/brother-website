import { ProductPageComponent } from './page/product-page/product-page.component';
import { IntropageComponent } from './page/intropage/intropage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: IntropageComponent },
  { path: 'catalog', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
