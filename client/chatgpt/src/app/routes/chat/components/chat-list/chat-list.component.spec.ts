import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChatConversationListComponent } from "./chat-list.component";

describe("ChatConversationListComponent", () => {
  let component: ChatConversationListComponent;
  let fixture: ComponentFixture<ChatConversationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChatConversationListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatConversationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
