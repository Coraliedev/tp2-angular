import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheHeureComponent } from './affiche-heure.component';

describe('AfficheHeureComponent', () => {
  let component: AfficheHeureComponent;
  let fixture: ComponentFixture<AfficheHeureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheHeureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheHeureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
