import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  start(){
  }
  ngOnInit(): void {
  }
  constructor(private router:Router) { } // <-- 注入router:Router
  
  to_indexPage() {
    this.router.navigate(['/forget-page']);
  }

}
