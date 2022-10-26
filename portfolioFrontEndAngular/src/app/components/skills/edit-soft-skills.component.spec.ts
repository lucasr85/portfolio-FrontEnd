import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoftSkillsComponent } from './edit-soft-skills.component';

describe('EditSoftSkillsComponent', () => {
  let component: EditSoftSkillsComponent;
  let fixture: ComponentFixture<EditSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSoftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
