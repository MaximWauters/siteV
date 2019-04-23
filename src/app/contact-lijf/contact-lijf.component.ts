import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-lijf',
  templateUrl: './contact-lijf.component.html',
  styleUrls: ['./contact-lijf.component.scss']
})
export class ContactLijfComponent implements OnInit {
  name: string = '';
  constructor(private http: HttpClient) {
    
   }

   KeyUp(event:any){
      this.name = event.target.value;
      console.log(this.name);
  }


  ngOnInit() {
  }

}
