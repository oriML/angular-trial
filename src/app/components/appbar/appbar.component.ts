import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  openDialog(){
      this.dialog.open(DialogComponent, {
        width: '30%'
      })
    }
  ngOnInit(): void {
  }

}
