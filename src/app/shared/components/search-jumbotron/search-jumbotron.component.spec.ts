import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJumbotronComponent } from './search-jumbotron.component';

describe('SearchJumbotronComponent', () => {
  let component: SearchJumbotronComponent;
  let fixture: ComponentFixture<SearchJumbotronComponent>;

  beforeEach(async(() => {
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
