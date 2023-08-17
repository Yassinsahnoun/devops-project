import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageetudComponent } from './pageetud.component';

describe('PageetudComponent', () => {
  let component: PageetudComponent;
  let fixture: ComponentFixture<PageetudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageetudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
