import { Component, OnInit } from '@angular/core';
import * as _ from 'mathjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
/*
  g: string = "assets/crew1.jpg";

  constructor() { 
    setInterval(this.switchUrl, 2000);
  }

  play(){
    
  }

  stop(){
    this.g = "assets/crew1.jpg";
    //clearInterval(this.switchUrl)
  }

   switchUrl = () => {
    var imgs: string[] = ["assets/crew1.jpg","assets/crew2.jpg","assets/crew3.jpg","assets/crew4.jpg","assets/crew5.jpg","assets/crew6.jpg","assets/crew7.jpg"]
    var x: number = 0;

    x = _.randomInt(0,7);

    this.g = imgs[x]

    console.log(x);

    return this.g;
  }
  */
  ngOnInit() {

  }

}
