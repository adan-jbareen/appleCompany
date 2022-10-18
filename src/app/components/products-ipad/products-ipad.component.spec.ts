import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsIpadComponent } from './products-ipad.component';

describe('ProductsIpadComponent', () => {
  let component: ProductsIpadComponent;
  let fixture: ComponentFixture<ProductsIpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsIpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsIpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
