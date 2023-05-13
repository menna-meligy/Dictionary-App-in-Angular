// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-synonyms-component',
//   templateUrl: './synonyms-component.component.html',
//   styleUrls: ['./synonyms-component.component.css'],
// })
// export class SynonymsComponentComponent {
//   @Input() synonyms!: string[];
// }
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedDataService } from '../shared-data-service.service';

@Component({
  selector: 'app-synonyms-component',
  templateUrl: './synonyms-component.component.html',
  styleUrls: ['./synonyms-component.component.css'],
})
export class SynonymsComponentComponent implements OnInit {
  word!: string;
  // synonyms!: any[];
  @Input() synonyms!: any[];

  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.word = this.sharedDataService.getWord();
    this.fetchSynonyms();
  }

  fetchSynonyms(): void {
    if (this.word) {
      this.apiService.fetchSynonyms(this.word).subscribe(
        (response) => {
          this.synonyms = response.response;
        },
        (error) => {
          console.error('Error fetching synonyms:', error);
        }
      );
    }
  }
}
