import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {

  @ViewChild('inputFile') inputFile: any;
  @ViewChild('firstName') firstName: any;


  reset(){
    this.inputFile.nativeElement.value='';
    this.file = "";
    console.log('changer')
    this.data = {
      fileName: '',
      description: '',
      }
  }


  constructor(private http: HttpClient,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  data = {
    fileName: '',
    description: '',
    }


  file: any

  onFileChange(event) {
    if(event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
      console.log(this.file)
    }
}

requ = true;


  onSubmit() {
/*

    this.http.post('https://postman-echo.com/post', dataString).subscribe(res => console.log(res),err => console.log(err)) */
    const formData: FormData = new FormData();

    console.log(this.file)
    formData.append('file', this.file, this.data.fileName)
    formData.append('data',JSON.stringify(this.data))

    const url = 'http://127.0.0.1:8080/data'

    this.http.post(url, formData).subscribe(() => {alert("Success"); this.reset()})

  }
}


@Component({
  selector: 'snack-bar-component',
  template: `<span class="party"> <strong> Upload Successfull! </strong> </span>`,
  styles: [`
    .party {
      color: hotpink;
    }
  `],
})
export class SnackBarComponent {}