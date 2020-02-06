import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  options = ["orange", "apple", "banana", "papaya", "kiwi"]
  selected = ["kiwi", "orange", "banana"]

  // when checkbox change, add/remove the item from the array
  onChange(checked, item){
    if(checked){
    this.selected.push(item);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1)
    }
  }
}
