import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategoryComponent } from './addcategory.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../shared/services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryfilterPipe } from './categoryfilter.pipe';

describe('AddcategoryComponent', () => {
  let component: AddcategoryComponent;
  let fixture: ComponentFixture<AddcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
      declarations: [ AddcategoryComponent, CategoryfilterPipe ],
      providers:[ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AddcategoryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Add Category');
  }));
});
