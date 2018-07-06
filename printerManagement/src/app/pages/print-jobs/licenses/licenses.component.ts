import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.scss']
})
export class LicensesComponent implements OnInit {

  data: any = []

  constructor(
    private http: HttpClient) { }

  ngOnInit() {
    this.loadArray()
  }

  loadArray() {
    this.http.get("http://127.0.0.1:8080/filelist").subscribe(res => {
      this.data = [];
      for (let i = 0; i < res[0].length; i++) {
        console.log(i)
        let newData = {
          id: res[0][i],
          name: this.hex2a(res[1][i]),
          description: this.hex2a(res[2][i]),
        };
        this.data.push(newData)
      }
      console.log(this.data)
    })
  }

  hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  }

  downloadFile(_id) {
    let downloadURL = 'http://127.0.0.1:8080/file' + '?' + 'id=' + _id
    console.log(downloadURL)
    window.open(downloadURL, "_self")
  }

  deleteFile(_id){
    this.http.delete('http://127.0.0.1:8080/file',{ params: {id: _id} }).subscribe( () => {
      console.log("test")
      this.loadArray();
    })
  }

}
