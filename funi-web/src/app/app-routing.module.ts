import { BillingComponent } from './page/billing/billing.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { IntropageComponent } from './page/intropage/intropage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './page/item-page/item-page.component';

const routes: Routes = [
  { path: '', component: IntropageComponent },
  { path: 'catalog', component: ProductPageComponent },
  { path: 'item', component: ItemPageComponent },
  { path: 'bill', component: BillingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
