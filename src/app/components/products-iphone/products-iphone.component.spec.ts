import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsIphoneComponent } from './products-iphone.component';

describe('ProductsIphoneComponent', () => {
  let component: ProductsIphoneComponent;
  let fixture: ComponentFixture<ProductsIphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsIphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
