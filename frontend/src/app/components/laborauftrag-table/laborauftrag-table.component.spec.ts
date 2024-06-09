import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborauftragTableComponent } from './laborauftrag-table.component';

describe('LaborauftragTableComponent', () => {
  let component: LaborauftragTableComponent;
  let fixture: ComponentFixture<LaborauftragTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborauftragTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborauftragTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
