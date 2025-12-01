import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRedirectComponent } from './no-redirect.component';

describe('NoRedirectComponent', () => {
  let component: NoRedirectComponent;
  let fixture: ComponentFixture<NoRedirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoRedirectComponent]
    });
    fixture = TestBed.createComponent(NoRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
