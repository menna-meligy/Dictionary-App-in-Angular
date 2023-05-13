import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordFormComponent } from './word-form/word-form.component';
import { TranslationResultComponent } from './translation-result/translation-result.component';
import { SynonymsComponentComponent } from './synonyms-component/synonyms-component.component';
import { AntonymsComponentComponent } from './antonyms-component/antonyms-component.component';
import { SamplePhrasesComponentComponent } from './sample-phrases-component/sample-phrases-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WordFormComponent,
    TranslationResultComponent,
    SynonymsComponentComponent,
    AntonymsComponentComponent,
    SamplePhrasesComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
