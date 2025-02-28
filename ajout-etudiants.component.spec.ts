import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEtudiantsComponent } from './ajout-etudiants.component';

describe('AjoutEtudiantsComponent', () => {
  let component: AjoutEtudiantsComponent;
  let fixture: ComponentFixture<AjoutEtudiantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEtudiantsComponent]
    });
    fixture = TestBed.createComponent(AjoutEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
