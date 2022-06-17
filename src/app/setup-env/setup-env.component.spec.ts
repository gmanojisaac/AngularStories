import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupEnvComponent } from './setup-env.component';

describe('SetupEnvComponent', () => {
  let component: SetupEnvComponent;
  let fixture: ComponentFixture<SetupEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
