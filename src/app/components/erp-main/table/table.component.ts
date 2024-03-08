import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  @Input() tableData:any;
  @Input() tableHeading:any;
  @Input() tableStyle:any = null;
  rowKeys:any = [];
  ngOnInit(): void {
    this.tableData?.data[0].forEach((data:any)=>{
      this.rowKeys.push((Object.keys(data)[0]))
    })
  }
}
