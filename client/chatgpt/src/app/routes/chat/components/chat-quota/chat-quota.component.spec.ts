import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { ChatDepositComponent } from "./chat-quota.component";

describe("ChatDepositComponent", () => {
  let component: ChatDepositComponent;
  let fixture: ComponentFixture<ChatDepositComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChatDepositComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
