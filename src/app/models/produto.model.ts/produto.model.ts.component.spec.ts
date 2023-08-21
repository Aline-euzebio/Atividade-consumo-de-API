import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoModelTsComponent } from './produto.model.ts.component';

describe('ProdutoModelTsComponent', () => {
  let component: ProdutoModelTsComponent;
  let fixture: ComponentFixture<ProdutoModelTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoModelTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoModelTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
