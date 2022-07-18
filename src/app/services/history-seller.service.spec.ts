import { TestBed } from '@angular/core/testing';

import { HistorySellerService } from './history-seller.service';

describe('HistorySellerService', () => {
  let service: HistorySellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorySellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
