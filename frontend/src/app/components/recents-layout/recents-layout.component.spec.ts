import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsLayoutComponent } from './recents-layout.component';

describe('RecentsLayoutComponent', () => {
  let component: RecentsLayoutComponent;
  let fixture: ComponentFixture<RecentsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
