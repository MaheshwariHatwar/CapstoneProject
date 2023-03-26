import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShehzadaComponent } from './shehzada.component';

describe('ShehzadaComponent', () => {
  let component: ShehzadaComponent;
  let fixture: ComponentFixture<ShehzadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShehzadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShehzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
