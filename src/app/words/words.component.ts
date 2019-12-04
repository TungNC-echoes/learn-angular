import { Component, OnInit } from '@angular/core';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  newEn = '';
  newVn = '';
  isShowForm = false;
  filterStatus = 'Xem_tat_ca';
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  constructor() { }

  ngOnInit() {
  }

  addWord() {
    if (this.newEn && this.newVn) {
      this.arrWords.unshift({
        id: this.arrWords.length + 1,
        en: this.newEn,
        vn: this.newVn,
        memorized: false
      });
      this.newVn = '';
      this.newEn = '';
      this.isShowForm = false;
    }
  }

  deleteWord(id) {
    if (id) {
      const index = this.arrWords.findIndex(e => e.id === id);
      this.arrWords.splice(index, 1);
    }
  }

  getShowStatus(memorized: boolean) {
    const dkXemTatCa = this.filterStatus === 'Xem_tat_ca';
    const dkXemDaNho = this.filterStatus === 'Xem_da_nho' && memorized;
    const dkXemChuaNho = this.filterStatus === 'Xem_chua_nho' && !memorized;
    return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  }
}
