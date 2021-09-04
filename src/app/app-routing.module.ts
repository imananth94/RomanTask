import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RomanConversionComponent } from './roman-conversion/roman-conversion.component';

const routes: Routes = [
  { path: 'roman', component: RomanConversionComponent },
  { path: '', component: RomanConversionComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
