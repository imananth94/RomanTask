import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanConversionComponent } from './roman-conversion.component';

describe('RomanConversionComponent', () => {
  let component: RomanConversionComponent;
  let fixture: ComponentFixture<RomanConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
