import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacintoshComponent } from './macintosh.component';

describe('MacintoshComponent', () => {
  let component: MacintoshComponent;
  let fixture: ComponentFixture<MacintoshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacintoshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacintoshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
