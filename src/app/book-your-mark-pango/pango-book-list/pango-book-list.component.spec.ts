import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangoBookListComponent } from './pango-book-list.component';

describe('PangoBookListComponent', () => {
  let component: PangoBookListComponent;
  let fixture: ComponentFixture<PangoBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PangoBookListComponent]
    });
    fixture = TestBed.createComponent(PangoBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
