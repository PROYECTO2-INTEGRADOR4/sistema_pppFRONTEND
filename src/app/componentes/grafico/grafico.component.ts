import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { GraficoService } from '../../service/grafico.service';
import { ChangeDetectorRef } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [ChartModule, CommonModule, SidebarComponent],
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  chartData: any;
  chartOptions: any;

  constructor(private graficoService: GraficoService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: [],
      datasets: [
        {
          label: 'Usuarios por Carrera',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)'
          ],
          borderWidth: 1
        }
      ]
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
    this.loadChartData();
  }
  
  loadChartData(): void {
  this.graficoService.getDatosGrafico().subscribe({
    next: (response) => {
      const labels = response.map((item: any) => item.carrera);
      const data = response.map((item: any) => item.total);

      this.chartData.labels = labels;
      this.chartData.datasets[0].data = data;

      console.log('Datos cargados para el gráfico:', this.chartData);

      // Forzar la detección de cambios
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error al cargar los datos del gráfico:', err);
    },
  });
}
}
