import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rrr',
  templateUrl: './rrr.component.html',
  styleUrls: ['./rrr.component.css']
})
export class RrrComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick() {
    this.router.navigateByUrl('/payment');
  };
 
}
