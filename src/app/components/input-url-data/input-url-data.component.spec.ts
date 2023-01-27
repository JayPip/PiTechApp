import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUrlDataComponent } from './input-url-data.component';

describe('InputUrlDataComponent', () => {
  let component: InputUrlDataComponent;
  let fixture: ComponentFixture<InputUrlDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputUrlDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputUrlDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
