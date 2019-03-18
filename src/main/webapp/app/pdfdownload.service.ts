import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PdfdownloadService {

  constructor(
    private http:HttpClient
  ) { }
    download(){
      // alert("hi");
        return this.http.get('http://192.168.1.40:8080/api/download');
        // .map(res => {
        //   return {
        //     filename: 'filename.pdf',
        //     data: res.blob()
        //   };
        // })
        // .subscribe(res => {
        //     // console.log('start download:',res);
        //     // var url = window.URL.createObjectURL(res.data);
        //     // var a = document.createElement('a');
        //     // document.body.appendChild(a);
        //     // a.setAttribute('style', 'display: none');
        //     // a.href = url;
        //     // a.download = res.filename;
        //     // a.click();
        //     // window.URL.revokeObjectURL(url);
        //     // a.remove(); // remove the element
        //   }, error => {
        //     // console.log('download error:', JSON.stringify(error));
        //   }, () => {
        //     // console.log('Completed file download.')
        //   });
      }
}
