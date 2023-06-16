import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDiaComponent } from './foto-dia.component';

describe('FotoDiaComponent', () => {
  let component: FotoDiaComponent;
  let fixture: ComponentFixture<FotoDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
