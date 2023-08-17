import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageprofComponent } from './pageprof.component';

describe('PageprofComponent', () => {
  let component: PageprofComponent;
  let fixture: ComponentFixture<PageprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageprofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
