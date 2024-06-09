import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborauftragDialogComponent } from './laborauftrag-dialog.component';

describe('LaborauftragDialogComponent', () => {
  let component: LaborauftragDialogComponent;
  let fixture: ComponentFixture<LaborauftragDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborauftragDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborauftragDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
