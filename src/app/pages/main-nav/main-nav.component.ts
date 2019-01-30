import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface MenuNode {
  name: string;
  path?: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: '概览',
    path: '/dashboard',
  },
  {
    name: '地图',
    children: [
      {name: 'Leaflet', path: '/map/leaflet'},
      {name: '百度', path: '/map/baidu'},
      {name: 'Google', path: '/map/google'},
    ]
  },
  {
    name: '列表',
    path: '/table',
  },
  {
    name: 'Shipping',
    path: '/shipping',
  },
  {
    name: 'Tree',
    path: '/tree',
  },
  {
    name: 'drag&drop',
    path: '/drag-drop',
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.dataSource.data = TREE_DATA;
  }

  private transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      path: node.path,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
