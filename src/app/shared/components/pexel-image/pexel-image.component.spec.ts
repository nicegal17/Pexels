import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PexelImageComponent } from './pexel-image.component';

describe('PexelImageComponent', () => {
  let component: PexelImageComponent;
  let fixture: ComponentFixture<PexelImageComponent>;

  beforeEach(waitForAsync(() => {
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
