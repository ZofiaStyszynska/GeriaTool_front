import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActiveSubstComponent } from './add-active-subst.component';

describe('AddActiveSubstComponent', () => {
  let component: AddActiveSubstComponent;
  let fixture: ComponentFixture<AddActiveSubstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActiveSubstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActiveSubstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
