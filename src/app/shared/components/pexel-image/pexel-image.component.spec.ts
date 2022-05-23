import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PexelImageComponent } from './pexel-image.component';

describe('PexelImageComponent', () => {
  let component: PexelImageComponent;
  let fixture: ComponentFixture<PexelImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PexelImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PexelImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
