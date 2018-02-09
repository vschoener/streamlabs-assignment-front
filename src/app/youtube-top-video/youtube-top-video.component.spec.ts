import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeTopVideoComponent } from './youtube-top-video.component';

describe('YoutubeTopVideoComponent', () => {
  let component: YoutubeTopVideoComponent;
  let fixture: ComponentFixture<YoutubeTopVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeTopVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeTopVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
