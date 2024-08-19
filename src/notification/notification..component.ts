import { Component, OnInit } from '@angular/core';

@Component
({
  selector: 'app-notification',
  template: '<div class="alert alert-success><p>This website uses cookies to provide better user experience.</p> </div>',
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #fad7a0; text-align:center"]
})

export class NotificationComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }
}
