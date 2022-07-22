import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../dictionary.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IWord} from "../IWord";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  iword: IWord;

  constructor(private dictionaryService: DictionaryService,
              private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.iword = this.dictionaryService.findByWord(this.ActivatedRoute.snapshot.params.word);
  }
}
