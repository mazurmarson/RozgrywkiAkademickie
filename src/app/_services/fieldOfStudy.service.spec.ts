/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FieldOfStudyService } from './fieldOfStudy.service';

describe('Service: FieldOfStudy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldOfStudyService]
    });
  });

  it('should ...', inject([FieldOfStudyService], (service: FieldOfStudyService) => {
    expect(service).toBeTruthy();
  }));
});
