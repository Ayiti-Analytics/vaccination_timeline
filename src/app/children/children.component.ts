import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildrenService } from './services/children.service';
import { HtaBoundaries } from '../utils/hta-boundaries';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private childrenService: ChildrenService, private router: Router) {
    this.items = new Observable<any>();
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };
    this.router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
       // trick the Router into believing it's last link wasn't previously loaded
       this.router.navigated = false;
       // if you need to scroll back to top, here is the right place
       window.scrollTo(0, 0);
    }
});
  }

 ngOnInit() {
   this.items = this.childrenService.getChildren()
   }
 // tslint:disable-next-line: jsdoc-format
/**
   gerenateSecCom() {
    const data = new HtaBoundaries();
    data.boudaries.hti_pop2019_adm1.forEach(value => {
      // console.log(value);
    this.childrenService.addChild(value);
    });
  }
 */
generateCalendar(id: string) {
  console.log(id);
}
}
