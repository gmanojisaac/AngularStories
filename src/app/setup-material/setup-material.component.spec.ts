import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMaterialComponent } from './setup-material.component';

describe('SetupMaterialComponent', () => {
  let component: SetupMaterialComponent;
  let fixture: ComponentFixture<SetupMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
