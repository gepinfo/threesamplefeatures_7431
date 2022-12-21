import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsofbloginComponent } from './ssofblogin.component';

describe('SsofbloginComponent', () => {
  let component: SsofbloginComponent;
  let fixture: ComponentFixture<SsofbloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsofbloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsofbloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});