import { Component, Input } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';



@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() titulo: string = "sin titulo"

  @Input('labels')doughnutChartLabels: string[] = ['Sin datos', 'Sin datos', 'Sin datos'];
  @Input('data')doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100],
        backgroundColor: ["#6857E6", "#009FEE", "#F02059"] 
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  public colors : Color[] = [
  ];
}
