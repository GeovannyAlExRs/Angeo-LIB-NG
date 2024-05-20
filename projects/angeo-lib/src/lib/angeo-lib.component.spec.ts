import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngeoLibComponent } from './angeo-lib.component';

describe('AngeoLibComponent', () => {
  let component: AngeoLibComponent;
  let fixture: ComponentFixture<AngeoLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngeoLibComponent]
    });
    fixture = TestBed.createComponent(AngeoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
