import { TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ParentComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ParentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'colors'`, () => {
    const fixture = TestBed.createComponent(ParentComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('colors');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ParentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('colors app is running!');
  });
});
