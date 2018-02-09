import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeChatComponent } from './youtube-chat.component';

describe('YoutubeChatComponent', () => {
  let component: YoutubeChatComponent;
  let fixture: ComponentFixture<YoutubeChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
