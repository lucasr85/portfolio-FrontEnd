import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSoftSkillsComponent } from './new-soft-skills.component';

describe('NewSoftSkillsComponent', () => {
  let component: NewSoftSkillsComponent;
  let fixture: ComponentFixture<NewSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSoftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
