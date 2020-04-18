import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { TranslocoRootModule } from './transloco-root.module'
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component'
import { SomethingsComponent } from './somethings/somethings.component'

@NgModule({
  declarations: [AppComponent, SomethingsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
