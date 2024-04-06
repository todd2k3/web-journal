import { Component } from '@angular/core';
// import moment from 'moment';
// import { JournalEntry } from '../journalentry';
import { JournalService } from '../journal.service';
import { MessageService } from '../message.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './entry-form.component.html',
  styleUrl: './entry-form.component.css'
})
export class EntryFormComponent {
  // private moment = moment(new Date)
  // public entryDate = moment.now().toLocaleString('en-US')
  entryForm = new FormGroup({
    topicValue: new FormControl(''),
    entryDate: new FormControl(''),
    entry: new FormControl('')
  });
  // constructor(private journalService: JournalService, private messageService: MessageService) { }
  constructor(private messageService: MessageService) {
    messageService.add("loaded the entry form");
  }

  submitEntry() {
    // entry = entry.trim();
    let topicValue = this.entryForm.value.topicValue ?? '';
    let entryDate = this.entryForm.value.entryDate ?? '';
    let entryContent = this.entryForm.value.entry ?? '';
    //let entryObj = {id: 1, prompt: topicValue, date: entryDate, entry: entryContent};
    // if (!entry) { return; }
    // this.journalService.addEntry({ entryObj } as JournalEntry)
    //   .subscribe(entry => {
    //     this.messageService.add("Entry Created.");
    //     //this.entries.push(entry);
    //   });
  }
}
