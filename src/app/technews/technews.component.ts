import { Component } from '@angular/core';
import {NewsService} from '../service/news.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent {

 constructor(private _service:NewsService){}
//display data
technewsDisplay:any=[];
  ngOnInit():void{
      this._service.techNews().subscribe((result)=>{
         console.log(result);
         this.technewsDisplay = result.articles
;
      });
  }



}
