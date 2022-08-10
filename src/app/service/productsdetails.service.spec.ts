import { TestBed } from '@angular/core/testing';

import { ProductsdetailsService } from './productsdetails.service';

describe('ProductsdetailsService', () => {
  let service: ProductsdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
