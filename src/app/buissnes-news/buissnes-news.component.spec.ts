import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuissnesNewsComponent } from './buissnes-news.component';

describe('BuissnesNewsComponent', () => {
  let component: BuissnesNewsComponent;
  let fixture: ComponentFixture<BuissnesNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuissnesNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuissnesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
