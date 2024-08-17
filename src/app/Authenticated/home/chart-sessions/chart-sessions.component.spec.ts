import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSessionsComponent } from './chart-sessions.component';

describe('ChartSessionsComponent', () => {
  let component: ChartSessionsComponent;
  let fixture: ComponentFixture<ChartSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartSessionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
