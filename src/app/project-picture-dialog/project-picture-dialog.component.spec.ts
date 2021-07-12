import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPictureDialogComponent } from './project-picture-dialog.component';

describe('ProjectPictureDialogComponent', () => {
  let component: ProjectPictureDialogComponent;
  let fixture: ComponentFixture<ProjectPictureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPictureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPictureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
