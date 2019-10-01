import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmapFbDashboardComponent } from './immap-fb-dashboard.component';

describe('ImmapFbDashboardComponent', () => {
  let component: ImmapFbDashboardComponent;
  let fixture: ComponentFixture<ImmapFbDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmapFbDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmapFbDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
