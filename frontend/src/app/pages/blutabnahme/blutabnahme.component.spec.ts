import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlutabnahmeComponent } from './blutabnahme.component';

describe('BlutabnahmeComponent', () => {
  let component: BlutabnahmeComponent;
  let fixture: ComponentFixture<BlutabnahmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlutabnahmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlutabnahmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
