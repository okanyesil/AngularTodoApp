import {fakeAsync, TestBed} from '@angular/core/testing';

import { FirebaseServiceService } from './firebase-service.service';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {TodoModel} from '../models/todo.model';

describe('FirebaseServiceService', () => {
  let service: FirebaseServiceService;
  let angularFirebaseServiceSpy: jasmine.SpyObj<AngularFireDatabase>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AngularFireDatabase', ['list']);
    TestBed.configureTestingModule({
      providers: [
        service,
        {provide: AngularFireDatabase, useValue: spy}
      ]
    });
  });

  service = TestBed.inject(FirebaseServiceService);
  angularFirebaseServiceSpy = TestBed.inject(AngularFireDatabase) as jasmine.SpyObj<AngularFireDatabase>;

  it('list should return AngularFireList', fakeAsync(() => {
    const stubleValue: AngularFireList<TodoModel> = null;
    angularFirebaseServiceSpy.list.and.returnValue(stubleValue);

    expect(service.getAll()).toBe(stubleValue, 'service returned stublevalue');
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
