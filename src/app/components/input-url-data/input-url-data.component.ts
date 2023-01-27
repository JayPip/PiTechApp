import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QrService } from 'src/app/services/qr.service';

@Component({
  selector: 'app-input-url-data',
  templateUrl: './input-url-data.component.html',
  styleUrls: ['./input-url-data.component.css']
})
export class InputUrlDataComponent implements OnInit {
  inputValue: string = '';
  imageToShow: any;
  isImageLoading: boolean = true;

  constructor(private router: Router, private qrservice: QrService){}
  ngOnInit(): void {
  }
  logValueToConsole() {
    var url = encodeURI(this.inputValue);
    this.isImageLoading = true;
      this.qrservice.GetQrCode(url).subscribe(data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
}

