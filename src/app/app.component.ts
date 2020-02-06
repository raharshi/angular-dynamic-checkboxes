import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  options = ["1", "2", "3", "4", "5"]
  selected = ["1", "2", "5"]

  // check if the item are selected
  checked(item){
    if(this.selected.indexOf(item) != -1){
      return true;
    }
  }

  // when checkbox change, add/remove the item from the array
  onChange(checked, item){
    if(checked){
    this.selected.push(item);
    } else {
      this.selected.splice(this.selected.indexOf(item), 1)
    }
  }
}
