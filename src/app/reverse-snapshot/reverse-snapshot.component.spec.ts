import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseSnapshotComponent } from './reverse-snapshot.component';

describe('ReverseSnapshotComponent', () => {
  let component: ReverseSnapshotComponent;
  let fixture: ComponentFixture<ReverseSnapshotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReverseSnapshotComponent]
    });
    fixture = TestBed.createComponent(ReverseSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
