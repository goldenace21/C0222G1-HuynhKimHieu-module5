import {Injectable} from '@angular/core';
import {IWord} from "./IWord";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  constructor() {
  }

  words: IWord[] = [{
    word: 'dog',
    mean: "cho",
  },
    {
      word: 'bird',
      mean: "chim",
    },
    {
      word: 'rat',
      mean: "chuot",
    },
    {
      word: 'cat',
      mean: "meo",
    },
    {
      word: 'rabbit',
      mean: "thor",
    },
  ];

  findAll(): IWord[] {
    return this.words;
  }

  findByWord(word: string): IWord {
    return this.words.find(obj => obj.word === word);
  }
}
