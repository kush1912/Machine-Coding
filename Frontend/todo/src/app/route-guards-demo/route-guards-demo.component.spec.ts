import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardsDemoComponent } from './route-guards-demo.component';

describe('RouteGuardsDemoComponent', () => {
  let component: RouteGuardsDemoComponent;
  let fixture: ComponentFixture<RouteGuardsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteGuardsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGuardsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
