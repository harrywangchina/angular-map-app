import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

import { MainTreeComponent } from './main-tree.component';

describe('MainTreeComponent', () => {
  let component: MainTreeComponent;
  let fixture: ComponentFixture<MainTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTreeComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
