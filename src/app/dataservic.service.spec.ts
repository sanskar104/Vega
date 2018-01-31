import { TestBed, inject } from '@angular/core/testing';
import { DataservicService } from './dataservic.service';

describe('DataservicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataservicService]
    });
  });

  it('should ...', inject([DataservicService], (service: DataservicService) => {
    expect(service).toBeTruthy();
  }));
});
