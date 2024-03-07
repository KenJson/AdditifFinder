import { ResolveFn } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AppService } from './app.service';
import { Inject, inject } from '@angular/core';
//item = snapshotdataitem

export const additiveResolverResolver: ResolveFn<any> = async (route) => {
  const service = inject(AppService);
  const id = route.paramMap.get('id');
  if (!id) {
    throw new Error('Pas trouvé de Id')
  }
  const item = await firstValueFrom(service.loadItemsById(id));
  return item;
};
