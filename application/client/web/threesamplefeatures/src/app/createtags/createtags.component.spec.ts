import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetagsComponent } from './createtags.component';

describe('CreatetagsComponent', () => {
  let component: CreatetagsComponent;
  let fixture: ComponentFixture<CreatetagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});