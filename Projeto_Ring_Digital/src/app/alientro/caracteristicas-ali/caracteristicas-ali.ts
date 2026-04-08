import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from '../../layout/alientro/alientro_header/headerAli';
import { Footer } from '../../layout/alientro/alientro_footer/footerAli';

@Component({
  selector: 'app-caracteristicas-ali',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './caracteristicas-ali.html',
  styleUrl: './caracteristicas-ali.css',
})
export class CaracteristicasAli {}