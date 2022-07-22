import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../dictionary.service";
import {IWord} from "../IWord";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  wordList: IWord[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit():void {
    this.wordList = this.dictionaryService.findAll();
  }
}
