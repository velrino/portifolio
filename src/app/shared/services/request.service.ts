import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RequestServiceInterface } from 'src/app/shared/interfaces/request.services.interface';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private _http: HttpClient, private _spinner: NgxSpinnerService) { }

  async request(
    address: string = null,
    method = 'GET',
    body = null,
    headers = null,
    params = null,
  ): Promise<RequestServiceInterface> {
    const response: RequestServiceInterface = { error: false, result: null };
    await this._spinner.show();
    const url = method === 'GET' ? this.urlWithoutCache(address) : address;

    await this._http
      .request(method, url, {
        body,
        params,
        headers,
        reportProgress: null,
        withCredentials: null,
        responseType: null,
      })
      .toPromise()
      .then(result => Object.assign(response, { error: false, result }))
      .catch(result => Object.assign(response, { error: true, result }))
      .finally(() => setTimeout(() => this._spinner.hide(), 1000));

    return response;
  }

  urlWithoutCache(url: string) {
    return url.concat('?cache='.concat(Date.now().toString()));
  }
}
