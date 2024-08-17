import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAuthenticatedComponent } from './main-authenticated.component';

describe('MainAuthenticatedComponent', () => {
  let component: MainAuthenticatedComponent;
  let fixture: ComponentFixture<MainAuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAuthenticatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
