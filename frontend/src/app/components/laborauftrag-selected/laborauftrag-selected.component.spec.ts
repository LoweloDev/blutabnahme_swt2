import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborauftragSelectedComponent } from './laborauftrag-selected.component';

describe('LaborauftragSelectedComponent', () => {
  let component: LaborauftragSelectedComponent;
  let fixture: ComponentFixture<LaborauftragSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaborauftragSelectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborauftragSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
