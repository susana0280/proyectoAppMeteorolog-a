import { Component, OnInit, Output, output,EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  inputSearch=new FormControl();
  @Output() submited=new EventEmitter<string>()

  constructor(){

  }

  ngOnInit(): void {
   
    this.onChange()
  }

  private onChange(){
    this.inputSearch.valueChanges
    .pipe(
      map((search:string)=>search.trim()),
      debounceTime(850),    
      distinctUntilChanged(),
      filter((search:string)=>search!==""),
      tap((search:string)=>this.submited.emit(search))
    )
    .subscribe()
  }

}
