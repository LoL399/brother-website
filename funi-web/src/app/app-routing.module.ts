import { BillingComponent } from './page/billing/billing.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { IntropageComponent } from './page/intropage/intropage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './page/item-page/item-page.component';
import { NoFoundComponent } from './page/no-found/no-found.component';
import { CartComponent } from './component/cart/cart.component';


const routes: Routes = [
  { path: '', component: IntropageComponent },
  { path: 'catalog', component: ProductPageComponent },
  { path: 'item', component: ItemPageComponent },
  { path: 'bill', component: BillingComponent },
  // { path: 'cart', component: CartComponent },
  { path: '**', component: NoFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
