import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComplaintsPage } from './edit-complaints.page';

describe('EditComplaintsPage', () => {
  let component: EditComplaintsPage;
  let fixture: ComponentFixture<EditComplaintsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditComplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
