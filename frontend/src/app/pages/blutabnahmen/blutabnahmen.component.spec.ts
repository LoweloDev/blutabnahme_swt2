import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlutabnahmenComponent } from './blutabnahmen.component';

describe('BlutabnahmenComponent', () => {
  let component: BlutabnahmenComponent;
  let fixture: ComponentFixture<BlutabnahmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlutabnahmenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlutabnahmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
