import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeOneComponent } from './see-one.component';

describe('SeeOneComponent', () => {
  let component: SeeOneComponent;
  let fixture: ComponentFixture<SeeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
