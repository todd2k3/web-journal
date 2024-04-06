import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];
  visibility: boolean = false;

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
