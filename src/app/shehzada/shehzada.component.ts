import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shehzada',
  templateUrl: './shehzada.component.html',
  styleUrls: ['./shehzada.component.css']
})
export class ShehzadaComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick() {
    this.router.navigateByUrl('/payment');
  };
}
