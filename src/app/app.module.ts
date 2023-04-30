import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent,NgbdModalContent } from './app.component';
import { MyModalComponent } from './my-modal/my-modal.component';
import { DadjokesService } from './dadjokes.service';
@NgModule({
  imports: [BrowserModule, NgbModule, HttpClientModule],
  declarations: [AppComponent, MyModalComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent],
  entryComponents: [MyModalComponent],
  providers: [DadjokesService]
})
export class AppModule { }
