import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActiveSubstListComponent } from './create-active-subst-list.component';

describe('CreateActiveSubstListComponent', () => {
  let component: CreateActiveSubstListComponent;
  let fixture: ComponentFixture<CreateActiveSubstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateActiveSubstListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateActiveSubstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
