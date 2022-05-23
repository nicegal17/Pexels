import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchJumbotronComponent } from './search-jumbotron.component';

describe('SearchJumbotronComponent', () => {
  let component: SearchJumbotronComponent;
  let fixture: ComponentFixture<SearchJumbotronComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
