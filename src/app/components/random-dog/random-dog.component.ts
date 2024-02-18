import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.css']
})
export class RandomDogComponent implements OnInit{

  data: ResultObj = {
    message:"",
    status:""
  };

  constructor(private httpClient: HttpClient) {
  }

  getRandomData(){
    let result = this.httpClient.get<ResultObj>("https://dog.ceo/api/breeds/image/random");
    result.subscribe(res =>{
      this.data = res;
    })
  }

  ngOnInit(): void {
this.getRandomData();
    }

}

interface ResultObj{
  message:string;
  status:string;
}
