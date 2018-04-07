import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { EditworkoutComponent } from './editworkout/editworkout.component';
import { HomeComponent } from './home/home.component';
import { StartworkoutComponent } from './startworkout/startworkout.component';
import { TrackworkoutComponent } from './trackworkout/trackworkout.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { EndworkoutComponent } from './endworkout/endworkout.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryfilterPipe } from './addcategory/categoryfilter.pipe';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AddworkoutComponent,
        EditworkoutComponent,
        EndworkoutComponent,
        HomeComponent,
        StartworkoutComponent, 
        TrackworkoutComponent, 
        AddcategoryComponent,
        CategoryfilterPipe
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Workout Tracker');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Workout Tracker!');
  }));
});
