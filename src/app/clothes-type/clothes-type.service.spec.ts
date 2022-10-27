import { TestBed } from '@angular/core/testing';

import { ClothesTypeService } from './clothes-type.service';

describe('ClothesTypeService', () => {
  let service: ClothesTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothesTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
