import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmapHomeComponent } from './immap-home.component';

describe('ImmapHomeComponent', () => {
  let component: ImmapHomeComponent;
  let fixture: ComponentFixture<ImmapHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmapHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmapHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
