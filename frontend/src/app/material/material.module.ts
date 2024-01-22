import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const MaterialComponents = [
  MatToolbarModule,
  TextFieldModule,
  MatSelectModule,
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
