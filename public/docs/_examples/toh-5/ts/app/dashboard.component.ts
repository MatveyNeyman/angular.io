// #docplaster
// #docregion
import { Component, OnInit } from '@angular/core';
// #docregion import-router
import { Router } from '@angular/router';
// #enddocregion import-router

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  // #docregion templateUrl
  templateUrl: 'dashboard.component.html',
  // #enddocregion templateUrl
  // #docregion css
  styleUrls: [ 'dashboard.component.css' ]
  // #enddocregion css
})
// #docregion component
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  // #docregion ctor
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }
  // #enddocregion ctor

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  // #docregion gotoDetail
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
  // #enddocregion gotoDetail
}
