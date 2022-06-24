import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdxFullComponent } from './mdx-full.component';

describe('MdxFullComponent', () => {
  let component: MdxFullComponent;
  let fixture: ComponentFixture<MdxFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdxFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdxFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
