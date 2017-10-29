import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private af: AngularFireDatabase) {
      let observableSub = this.af.object('connected');
    
      observableSub.subscribe({
          next: (data) => { console.log(data)},
          error: (error) => { console.log(error)},
          complete: () => { console.log('Complete')}
      });

     
  }
}
