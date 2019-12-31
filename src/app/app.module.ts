import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RichTextEditorModule,
    ListBoxAllModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule,
    HttpClientModule,
    NgxImageZoomModule.forRoot()
  ],
  providers: [TabsetConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
