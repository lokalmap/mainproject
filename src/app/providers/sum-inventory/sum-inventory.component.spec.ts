import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumInventoryComponent } from './sum-inventory.component';

describe('SumInventoryComponent', () => {
  let component: SumInventoryComponent;
  let fixture: ComponentFixture<SumInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
