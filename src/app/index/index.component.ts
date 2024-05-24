import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StartDialogComponent } from '../start-dialog/start-dialog.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  
  sectionContainer = [
    { id: 1, title: 'Getting Start', lessons: ['learson 1', 'learson 2', 'learson 3'] },
    { id: 2, title: 'Listen', lessons: ['learson 1', 'learson 2', 'learson 3', 'learson 4'] },
    { id: 3, title: 'Getting Start Again', lessons: ['learson 1', 'learson 2', 'learson 3'] }
  ];

  sidebarContent = [
    {
      title: 'Lorem it',
      buttons: ['Lorem, ipsum 1', 'Lorem, ipsum 2', 'Lorem, ipsum 3']
    },
    {
      title: 'Lorem it',
      buttons: ['Lorem, ipsum 1', 'Lorem, ipsum 2']
    }
  ];
  constructor(private router:Router,private dialog: MatDialog) { } // <-- 注入router:Router

  startCount() {
    const dialogRef = this.dialog.open(StartDialogComponent, {
      width: '250px',
      data: { message: 'Dialog content goes here' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {
  }
  
  to_indexPage() {
    // this.router.navigate(['/forget-page']);
  }

}
