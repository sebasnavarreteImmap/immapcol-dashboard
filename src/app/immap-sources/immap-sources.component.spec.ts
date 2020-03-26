import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmapSourcesComponent } from './immap-sources.component';

describe('ImmapSourcesComponent', () => {
  let component: ImmapSourcesComponent;
  let fixture: ComponentFixture<ImmapSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmapSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmapSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
