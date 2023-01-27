import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private http: HttpClient) {   }
   GetQrCode(url: string):Observable<Blob>{
    return this.http.get('https://api.qrserver.com/v1/create-qr-code/?data=' + url,{ responseType: 'blob' });
   }
}
