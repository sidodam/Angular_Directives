import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent } from './parent.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [ParentComponent, HighlightDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ParentComponent],
})
export class AppModule {}
