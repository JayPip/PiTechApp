import { Component, OnInit } from "@angular/core";
import { Tab } from "src/app/models/tab-model";
import { TaskList1Component } from "../task-list1/task-list1.component";
import { TabService } from "src/app/services/tab.service";

@Component({
  selector: "app-task-window",
  templateUrl: "./task-window.component.html",
  styleUrls: ["./task-window.component.css"]
})
export class TaskWindowComponent implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number =0;
constructor(private tabService: TabService) {}
ngOnInit() {
  this.tabService.tabSub.subscribe(tabs => {
  this.tabs = tabs;
  this.selectedTab = tabs.findIndex(tab => tab.active);
});}

tabChanged(event: any) {
  console.log(this.selectedTab);
}

addNewTab() {
  this.tabService.addTab(
  new Tab(TaskList1Component, "Comp1 View", { parent: "TaskWindowComponent" })
);}

removeTab(index: number): void {
  this.tabService.removeTab(index);
}}