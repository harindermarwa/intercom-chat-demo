import { Component, OnInit } from '@angular/core';
import { Intercom } from '@awesome-cordova-plugins/intercom/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public intercom: Intercom) {}

  ngOnInit(): void {
  }

  showChat(): void {
    this.intercom.registerIdentifiedUser({email:"test@example.com", userId: "123456"}).then((res) => {
      this.intercom.displayMessenger().then((res) => {
      })
      .catch((err) => {
        alert(err.toString())
      })
    }).catch((err) => {
      alert(err.toString())
    })
  }

}
