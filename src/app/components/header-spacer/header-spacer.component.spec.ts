import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSpacerComponent } from './header-spacer.component';

describe('HeaderSpacerComponent', () => {
  let component: HeaderSpacerComponent;
  let fixture: ComponentFixture<HeaderSpacerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSpacerComponent]
    });
    fixture = TestBed.createComponent(HeaderSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
