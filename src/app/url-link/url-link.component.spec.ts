import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlLinkComponent } from './url-link.component';

describe('UrlLinkComponent', () => {
  let component: UrlLinkComponent;
  let fixture: ComponentFixture<UrlLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlLinkComponent]
    });
    fixture = TestBed.createComponent(UrlLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
