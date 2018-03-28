import { Injectable } from '@angular/core';
@Injectable()
export class GlobalSettingsService {
  public API_SERVER_PORTSTRING: string = (window.location.hostname === 'localhost') ? ':3000' : '';

  public getApiUrl(): string {
    return `${window.location.protocol}//${window.location.hostname}${this.API_SERVER_PORTSTRING}`;
  }
}
