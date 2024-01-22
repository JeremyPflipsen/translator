import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodycolumnComponent } from './bodycolumn.component';

describe('BodycolumnComponent', () => {
  let component: BodycolumnComponent;
  let fixture: ComponentFixture<BodycolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BodycolumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodycolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
