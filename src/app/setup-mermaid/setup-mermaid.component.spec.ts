import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMermaidComponent } from './setup-mermaid.component';

describe('SetupMermaidComponent', () => {
  let component: SetupMermaidComponent;
  let fixture: ComponentFixture<SetupMermaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupMermaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMermaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
