import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from 'src/app/components/stars/stars.component';

@NgModule({
  declarations: [StarsComponent],
  imports: [CommonModule],
  exports: [StarsComponent],
})
export class SharedModule {}
