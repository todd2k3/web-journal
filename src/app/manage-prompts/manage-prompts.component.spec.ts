import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePromptsComponent } from './manage-prompts.component';

describe('ManagePromptsComponent', () => {
  let component: ManagePromptsComponent;
  let fixture: ComponentFixture<ManagePromptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePromptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagePromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
