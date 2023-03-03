import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels: string[] = ['Comprar aceite', 'Comprar llantas', 'Comprar seguro']
  public data1: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [{
      data: [40, 100, 100],
      backgroundColor: ['#00821C', '#09DB36', '#024D0F']
    },
    ]
  };
}
