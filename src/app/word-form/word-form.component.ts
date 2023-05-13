import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data-service.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css'],
})
export class WordFormComponent {
  sourceLang: string = '';
  targetLang: string = '';
  word: string = '';

  constructor(
    private sharedDataService: SharedDataService,
    private apiService: ApiService
  ) {}

  onSubmit() {
    // Set the source language, target language, and word in the shared data service
    this.sharedDataService.setSourceLanguage(this.sourceLang);
    this.sharedDataService.setTargetLanguage(this.targetLang);
    this.sharedDataService.setWord(this.word);
    console.log(this.word);
    // Call the translation API or perform any other necessary actions
    // You can access the shared data service methods here
    this.apiService.fetchTranslations(this.word).subscribe(
      (response) => {
        // Handle the API response here
        console.log('Translation API response:', response);
      },
      (error) => {
        // Handle the API error here
        console.error('Translation API error:', error);
      }
    );
  }
}
