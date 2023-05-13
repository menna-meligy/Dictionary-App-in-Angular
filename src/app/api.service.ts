import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private dictionaryApiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  constructor(private http: HttpClient) {}

  fetchDefinitions(word: string): Observable<any> {
    const url = `${this.dictionaryApiUrl}/${word}`;

    return this.http.get(url);
  }

  fetchAntonyms(word: string): Observable<any> {
    const url = `${this.dictionaryApiUrl}/${word}/antonyms`;

    return this.http.get(url);
  }

  fetchSynonyms(word: string): Observable<any> {
    const url = `${this.dictionaryApiUrl}/${word}/synonyms`;

    return this.http.get(url);
  }

  fetchSamplePhrases(word: string): Observable<any> {
    const url = `${this.dictionaryApiUrl}/${word}/sentences`;

    return this.http.get(url);
  }

  fetchTranslations(word: string): Observable<any> {
    const url = `${this.dictionaryApiUrl}/${word}/translations`;

    return this.http.get(url);
  }
}

// private apiKey = 'https://www.wordsapi.com/';
// private yandexDictApiKey = 'https://tech.yandex.com/dictionary';
// private thesaurusApiKey = 'http://thesaurus.altervista.org/service';
