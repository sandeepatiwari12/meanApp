import { Injectable, EventEmitter } from '@angular/core';

/**
 * A service to fire events, used to communicate between modules
 */
@Injectable()
export class EventReaderService {

  public deleteContactData = new EventEmitter();
}
