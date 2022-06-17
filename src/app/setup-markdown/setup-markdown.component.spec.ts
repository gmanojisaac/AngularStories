import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMarkdownComponent } from './setup-markdown.component';

describe('SetupMarkdownComponent', () => {
  let component: SetupMarkdownComponent;
  let fixture: ComponentFixture<SetupMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupMarkdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
