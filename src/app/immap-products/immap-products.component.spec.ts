import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmapProductsComponent } from './immap-products.component';

describe('ImmapProductsComponent', () => {
  let component: ImmapProductsComponent;
  let fixture: ComponentFixture<ImmapProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmapProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmapProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
