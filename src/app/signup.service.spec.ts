import { TestBed, inject } from '@angular/core/testing';
import { SignupService } from './signup.service';

describe('SignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupService]
    });
  });

  it('should ...', inject([SignupService], (service: SignupService) => {
    expect(service).toBeTruthy();
  }));
});
