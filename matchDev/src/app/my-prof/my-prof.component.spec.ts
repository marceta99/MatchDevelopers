import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfComponent } from './my-prof.component';

describe('MyProfComponent', () => {
  let component: MyProfComponent;
  let fixture: ComponentFixture<MyProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
