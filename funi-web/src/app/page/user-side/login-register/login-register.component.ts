import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  @ViewChild('body') cardBody: ElementRef | undefined;

  constructor() { }

  tabType = Tab;

  currentTab = Tab.LOGIN;
  headerTab = Tab.LOGIN;

  ngOnInit(): void {
  }

  setCurrentTab(current: Tab) {
    this.headerTab = current;
    this.cardBody?.nativeElement.classList.add('change');
    setTimeout(() => { this.currentTab = current }, 500);
    setTimeout(() => { this.cardBody?.nativeElement.classList.remove('change'); }, 600);


  }

}

enum Tab {
  LOGIN,
  REGISTRY
}
