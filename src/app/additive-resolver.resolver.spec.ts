import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { additiveResolverResolver } from './additive-resolver.resolver';

describe('additiveResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => additiveResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
