import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagePromptsComponent } from './manage-prompts/manage-prompts.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'prompts', component:  ManagePromptsComponent },
    { path: 'entryform', component: EntryFormComponent }
];
  
//  @NgModule({
//     imports: [ RouterModule.forRoot(routes) ],
//     exports: [ RouterModule ]
//   })

