import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplainPage } from './complain.page';

describe('ComplainPage', () => {
  let component: ComplainPage;
  let fixture: ComponentFixture<ComplainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComplainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
