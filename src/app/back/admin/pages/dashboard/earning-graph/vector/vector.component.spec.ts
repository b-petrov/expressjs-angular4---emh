import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorComponent } from './vector.component';

describe('VectorComponent', () => {
  let component: VectorComponent;
  let fixture: ComponentFixture<VectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
