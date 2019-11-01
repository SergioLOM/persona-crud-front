import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleRegistryComponent } from './people-registry.component';

describe('PeopleRegistryComponent', () => {
  let component: PeopleRegistryComponent;
  let fixture: ComponentFixture<PeopleRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
