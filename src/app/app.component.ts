import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-introduction';
}

@Component({
  selector: 'app-hello',
  template: `<div class="border border-2 border-success"><p>Hello how are you?</p></div>`,
})
export class HelloComponent {}
