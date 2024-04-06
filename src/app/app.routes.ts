import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagePromptsComponent } from './manage-prompts/manage-prompts.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'prompts', component:  ManagePromptsComponent, title: 'Manage Prompts'},
    { path: 'entryform', component: EntryFormComponent, title: 'Entry Form' }
];
  
export default routes;
//  @NgModule({
//     imports: [ RouterModule.forRoot(routes) ],
//     exports: [ RouterModule ]
//   })

