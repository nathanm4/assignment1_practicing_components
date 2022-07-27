import { Component } from '@angular/core';
//basically creating html tag
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'nathan'; //data binding in action, this is how we can call dynamic data types in html code
}
