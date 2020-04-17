import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { SomethingsComponent } from './somethings/somethings.component'
import { HttpClientModule } from '@angular/common/http'
import { TranslocoRootModule } from './transloco-root.module'
import { SharedModule } from './shared/shared.module'

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
