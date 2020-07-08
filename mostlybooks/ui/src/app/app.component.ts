import { Component, OnInit } from '@angular/core';
import { GetBooks } from './store/actions/view-books.action';
import { Store, select } from '@ngrx/store';
import * as store from '../app/store';
import * as viewbooksSelector from '../app/store/selectors/view-books.selector';
import { Observable } from 'rxjs';
import { Books, Book } from './models/view-books.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(protected appState$: Store<store.State>) { }
  title = 'Mostly Books';
  tabId = 'viewbooks';
  viewBooks$: Observable<Book[]>;

  ngOnInit() {
    this.appState$.dispatch(new GetBooks(this.tabId));
    this.getBooks();
  }

  getBooks(){
    this.viewBooks$ = this.appState$.pipe(select(viewbooksSelector.viewBooks(this.tabId)))
  }
}
