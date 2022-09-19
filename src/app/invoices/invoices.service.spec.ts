import { TestBed } from '@angular/core/testing';

import { InvoicesService } from './invoice.service';

describe('InvoicesService', () => {
  let service: InvoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
