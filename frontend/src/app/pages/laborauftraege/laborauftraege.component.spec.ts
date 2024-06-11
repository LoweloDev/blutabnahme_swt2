import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborauftraegeComponent } from './laborauftraege.component';

describe('LaborauftraegeComponent', () => {
  let component: LaborauftraegeComponent;
  let fixture: ComponentFixture<LaborauftraegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborauftraegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborauftraegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
