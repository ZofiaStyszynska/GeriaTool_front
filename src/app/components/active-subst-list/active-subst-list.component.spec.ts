import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSubstListComponent } from './active-subst-list.component';

describe('ActiveSubstListComponent', () => {
  let component: ActiveSubstListComponent;
  let fixture: ComponentFixture<ActiveSubstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveSubstListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSubstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
