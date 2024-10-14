import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCustomerPage } from './edit-customer.page';

describe('EditCustomerPage', () => {
  let component: EditCustomerPage;
  let fixture: ComponentFixture<EditCustomerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
