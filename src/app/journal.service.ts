import { JournalEntry } from './journalentry';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { JournalPrompt } from './journalprompt';

export class JournalService {
    private entriesUrl = 'api/entry';  // URL to web api
    private promptsUrl = 'api/prompt';  // URL to web api
    private promptsUsedUrl = 'api/usedprompts';  // URL to web api

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    /** POST: add a new entry to the server */
    addEntry(entry: JournalEntry): Observable<JournalEntry> {
        return this.http.post<JournalEntry>(this.entriesUrl, entry, this.httpOptions).pipe(
            tap((newEntry: JournalEntry) => this.log(`added entry w/ id=${newEntry.id}`)),
            catchError(this.handleError<JournalEntry>('addEntry'))
        );
    }

    /** GET: a new prompt that has not be previously used */
    getPrompts(prompt: JournalPrompt): Observable<JournalPrompt[]> {
        return this.http.get<JournalPrompt[]>(this.promptsUrl)
          .pipe(
            tap(_ => this.log('fetched prompts')),
            catchError(this.handleError<JournalPrompt[]>('getPrompts', []))
          );
    }

    /** GET: a new prompt that has not be previously used */
    getUsedPrompts(prompt: JournalPrompt): Observable<JournalPrompt[]> {
      return this.http.get<JournalPrompt[]>(this.promptsUsedUrl)
        .pipe(
          tap(_ => this.log('fetched used prompts')),
          catchError(this.handleError<JournalPrompt[]>('getUsedPrompts', []))
        );
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EntryService: ${message}`);
  }
}