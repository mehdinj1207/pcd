import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-registerformer',
  templateUrl: './registerformer.component.html',
  styleUrls: ['./registerformer.component.css']
})
export class RegisterformerComponent implements OnInit {

  constructor() { }
  selectedFile =null;

  onFileSelected(event: any){
    console.log(event);

  }
  ngOnInit(): void {
  }

}
