import { Injectable } from '@angular/core';
import { Tab} from '../models/tab-model';
import { BehaviorSubject } from "rxjs";
import { TaskList1Component } from '../components/task-list1/task-list1.component';
@Injectable({
  providedIn: 'root'
})
export class TabService {
  public tabs: Tab[]=[new Tab(TaskList1Component, "Comp View", { parent: "TaskWindowComponent" })];
  
  constructor() { }
  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);
  
  public removeTab(index: number) {
    this.tabs.splice(index, 1);
    if (this.tabs.length > 0) {
      this.tabs[this.tabs.length - 1].active = true;
    }
    this.tabSub.next(this.tabs);
  }

  public addTab(tab: Tab) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].active === true) {
      this.tabs[i].active = false;
      }
    }
    tab.id = this.tabs.length + 1;
    tab.active = true;
    this.tabs.push(tab);
    this.tabSub.next(this.tabs);
  }
}
