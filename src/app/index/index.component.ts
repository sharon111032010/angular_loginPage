import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  
  ngOnInit(): void {
  }
  constructor(private router:Router) { } // <-- 注入router:Router
  
  to_indexPage() {
    this.router.navigate(['/forget-page']);
  }

}
