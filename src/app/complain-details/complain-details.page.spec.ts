import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplainDetailsPage } from './complain-details.page';

describe('ComplainDetailsPage', () => {
  let component: ComplainDetailsPage;
  let fixture: ComponentFixture<ComplainDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComplainDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
