/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BlogModel } from '../models/blog-model';
@Injectable({
  providedIn: 'root',
})
class Blog2Service extends __BaseService {
  static readonly GetPath = '/api/blogs2';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  GetResponse(): __Observable<__StrictHttpResponse<Array<BlogModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/blogs2`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BlogModel>>;
      })
    );
  }
  /**
   * @return Success
   */
  Get(): __Observable<Array<BlogModel>> {
    return this.GetResponse().pipe(
      __map(_r => _r.body as Array<BlogModel>)
    );
  }
}

module Blog2Service {
}

export { Blog2Service }
