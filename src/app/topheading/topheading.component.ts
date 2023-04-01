import { Component } from '@angular/core';
import {NewsService} from '../service/news.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent {
constructor(private _service:NewsService){}
//display data
topheadingDisplay:any=[];
  ngOnInit():void{
      this._service.topHeading().subscribe((result)=>{
         console.log(result);
         this.topheadingDisplay = result.articles
;
      });
  }


}
