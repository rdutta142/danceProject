import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import {DialogModule} from 'primeng/dialog';
import {PopoverModule} from 'ngx-popover';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  display: boolean = false;
  filterData = [
    {
      label: "Author",
      id: "autherFilter",
      iconPath: "../assets/images/dance.jpg",
      type: "checkbox",
      listData: [{ field1: "Ritu", field2: "Abhishek", field3: "Akanksha" }],
      listDataLabel: "field1"
    },

    {
      label: "Status",
      id: "statusFilter",
      iconPath: "../assets/images/dance.jpg",
      type: "date",
      minDate: new Date(),
      maxDate: new Date()
    },

    {
      label: "Type",
      id: "statusFilter",
      iconPath: "../assets/images/dance.jpg",
      type: "date",
      minDate: new Date(),
      maxDate: new Date()
    },

    {
      label: "Creation Date",
      id: "statusFilter",
      iconPath: "../assets/images/dance.jpg",
      type: "date",
      minDate: new Date(),
      maxDate: new Date()
    },

    {
      label: "Protocol Number",
      id: "statusFilter",
      iconPath: "../assets/images/dance.jpg",
      type: "date",
      minDate: new Date(),
      maxDate: new Date()
    },
  
    {
      label: "Machine",
      id: "statusFilter",
      iconPath: "../assets/images/dance.jpg",
      type: "date",
      minDate: new Date(),
      maxDate: new Date()
    },
  
    {
      label: "Machine",
      id: "statusFilter",
      iconPath: "../assets/images/dance.jpg",
      type: "date",
      minDate: new Date(),
      maxDate: new Date()
    },
  
    {
      label: "Machine",
      id: "statusFilter",
      iconPath: "../assets/images/dance.jpg",
      type: "date",
      minDate: new Date(),
      maxDate: new Date()
    },
  
    {
      label: "Machine",
      id: "statusFilter",
      iconPath: "../assets/images/dance.jpg",
      type: "date",
      minDate: new Date(),
      maxDate: new Date()
    }];

  constructor() {

  }

  ngOnInit() {
  }

  openDialog(indx: number) {
    this.display = true;
  }

}
