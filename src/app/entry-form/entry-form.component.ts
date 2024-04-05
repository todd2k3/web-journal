import { Component } from '@angular/core';
import moment from 'moment';
import { JournalEntry } from '../journalentry';
import { JournalService } from '../journal.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-entry-form',
  standalone: true,
  imports: [],
  templateUrl: './entry-form.component.html',
  styleUrl: './entry-form.component.css'
})
export class EntryFormComponent {
  private moment = moment(new Date)
  public entryDate = moment.now().toLocaleString('en-US')
  constructor(private journalService: JournalService, private messageService: MessageService) { }

  add(entry: string): void {
    entry = entry.trim();
    if (!entry) { return; }
    this.journalService.addEntry({ entry } as JournalEntry)
      .subscribe(entry => {
        this.messageService.add("Entry Created.");
        //this.entries.push(entry);
      });
  }

  // function getEntryDate() {
  //   const date = new Date();
  //   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  //   const formatter = new Intl.DateTimeFormat('en-US', options);
  //   const formattedDateTime = formatter.format(date);
  //   return formattedDateTime;
  // }
}
