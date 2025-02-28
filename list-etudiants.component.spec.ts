import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiantsComponent } from './list-etudiants.component';

describe('ListEtudiantsComponent', () => {
  let component: ListEtudiantsComponent;
  let fixture: ComponentFixture<ListEtudiantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEtudiantsComponent]
    });
    fixture = TestBed.createComponent(ListEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
