import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEtudiantsComponent } from './edit-etudiants.component';

describe('EditEtudiantsComponent', () => {
  let component: EditEtudiantsComponent;
  let fixture: ComponentFixture<EditEtudiantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEtudiantsComponent]
    });
    fixture = TestBed.createComponent(EditEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
