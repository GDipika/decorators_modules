import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sample1';
  showData = false;

  ngOnInit(): void {
    setTimeout(() => {
      console.log('asasasa');
      this.showData = true;
    }, 5000);
  }
}
