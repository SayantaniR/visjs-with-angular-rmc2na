import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { PopoverModule, PopoverConfig, PopoverDirective } from 'ngx-bootstrap';
declare var vis: any;

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.css'],
})
export class VisComponent implements OnInit {
  @ViewChild('siteConfigNetwork') networkContainer: ElementRef;
  @ViewChild('svgNetwork') svgNetworkContainer: ElementRef;

  public network: any;

  constructor() {}

  ngOnInit() {
    this.drawSvgNetwork(); // DRAW SVG WITH CUSTOM HTML

    var treeData = this.getTreeData();
    this.loadVisTree(treeData); // RENDER STANDARD NODES WITH TEXT LABEL
  }

  loadVisTree(treedata) {
    var options = {
      interaction: {
        hover: true,
      },
      manipulation: {
        enabled: true,
      },
    };
    var container = this.networkContainer.nativeElement;
    this.network = new vis.Network(container, treedata, options);

    var that = this;
    this.network.on('hoverNode', function (params) {
      console.log('hoverNode Event:', params);
    });
    this.network.on('blurNode', function (params) {
      console.log('blurNode event:', params);
    });
  }

  getTreeData() {
    var nodes = [
      { id: 1, label: 'cilin:kapow', title: 'I am node 1!' },
      { id: 2, label: 'DS_6722100652.pdf', title: 'I am node 2!' },
      { id: 3, label: 'cilin:dirsurRegistrationSrvc' },
      { id: 4, label: 'WELL_SRVY_PROCESS/surveyid/9956618407' },
      {
        id: 5,
        label:
          'cilin:dirsurClassificationSrvc ,cilin:humanAgent/Analyst/test_test',
      },
      { id: 6, label: 'DS_6722100652.pdf' },
      { id: 7, label: 'cilin:grooper' },
      { id: 8, label: 'DS_6919454010.json' },
      { id: 9, label: 'cilin:dirsurExtractionSrvc' },
      { id: 10, label: 'DS_7592422896.json' },
      { id: 11, label: 'cilin:dirsurCalculationSrvc' },
      { id: 12, label: 'DS_9774482940.json' },
      { id: 13, label: 'cilin:dirsurValidationSrvc' },
      { id: 14, label: 'DS_6331904684.json' },
      { id: 15, label: 'cilin:dirsurIngestionSrvc' },
      { id: 16, label: 'WELL_DIR_SRVY/SURVEY_ID/8273874018' },
      { id: 17, label: 'WELL_DIR_SRVY_STATION/SURVEY_ID/8273874018' },
    ];

    // create an array with edges
    var edges = [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 4, to: 5 },
      { from: 5, to: 4 },
      { from: 5, to: 6 },
      { from: 6, to: 7 },
      { from: 7, to: 8 },
      { from: 8, to: 9 },
      { from: 9, to: 10 },
      { from: 10, to: 11 },
      { from: 11, to: 12 },
      { from: 12, to: 13 },
      { from: 13, to: 14 },
      { from: 14, to: 15 },
      { from: 15, to: 16 },
      { from: 15, to: 16 },
    ];
    var treeData = {
      nodes: nodes,
      edges: edges,
    };
    return treeData;
  }

  drawSvgNetwork() {
    var nodes = null;
    var edges = null;
    var network = null;

    var DIR = 'img/refresh-cl/';
    var LENGTH_MAIN = 150;
    var LENGTH_SUB = 50;

    var svg = '';

    var url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

    // Create a data table with nodes.
    nodes = [];

    // Create a data table with links.
    //edges = [];

    // nodes.push({ id: 1, label: 'Get HTML', image: url, shape: 'image' });
    // nodes.push({ id: 2, label: 'Using SVG', image: url, shape: 'image' });
    //edges.push({ from: 1, to: 2, length: 300 });

    // create a network
    var container = this.svgNetworkContainer.nativeElement;

    //var container = document.getElementById('mynetwork');
    var data = {
      nodes: nodes,
      edges: edges,
    };
    var options = {
      physics: { stabilization: false },
      edges: { smooth: false },
    };
    //network = new vis.Network(container, data, options);
    this.network = new vis.Network(container, data, options);
  }
}
