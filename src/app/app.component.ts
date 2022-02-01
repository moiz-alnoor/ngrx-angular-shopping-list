import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store"
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item-model';
import { AppState } from "./store/models/app-state-model"
import { AddItemAction } from './store/actions/shopping-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  shoppingItems$!: Observable<Array<ShoppingItem>> 
  title = 'angular-ngrx-shopping-list';
  
  constructor(private store: Store<AppState>){}

  ngOnInit(): void{
    this.shoppingItems$ = this.store.select(store => store.shopping)
    console.log(this.shoppingItems$)
  }
  addItem(item:any){
    console.log(item.value.item)
    this.store.dispatch(new AddItemAction({id: 342, name: item.value.item}));

  }
}
