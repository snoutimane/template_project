import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidateComponent } from './add-candidate.component';

describe('AddCandidateComponent', () => {
  let component: AddCandidateComponent;
  let fixture: ComponentFixture<AddCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidateComponent]
    });
    fixture = TestBed.createComponent(AddCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
