import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditVehiclePage } from './edit-vehicle.page';

describe('EditVehiclePage', () => {
  let component: EditVehiclePage;
  let fixture: ComponentFixture<EditVehiclePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
