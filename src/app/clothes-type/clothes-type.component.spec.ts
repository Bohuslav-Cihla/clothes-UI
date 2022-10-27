import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesTypeComponent } from './clothes-type.component';

describe('ClothesTypeComponent', () => {
  let component: ClothesTypeComponent;
  let fixture: ComponentFixture<ClothesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
