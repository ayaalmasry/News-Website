import { Component } from '@angular/core';
import {NewsService} from '../service/news.service';

@Component({
  selector: 'app-buissnes-news',
  templateUrl: './buissnes-news.component.html',
  styleUrls: ['./buissnes-news.component.css']
})
export class BuissnesNewsComponent {
  constructor(private _service:NewsService){}
 //display data
buissnesnewsDisplay:any=[];
  ngOnInit():void{
      this._service.businessNews().subscribe((result)=>{
         console.log(result);
         this.buissnesnewsDisplay = result.articles
;
      });
  }
}
