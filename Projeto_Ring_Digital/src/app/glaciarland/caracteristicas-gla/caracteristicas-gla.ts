import { Component } from '@angular/core';
import { Header } from '../../layout/glaciarland/glaciarland_header/headerGla';
import { Footer } from '../../layout/glaciarland/glaciarland_footer/footerGla';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caracteristicas-gla',
  imports: [Header,Footer,CommonModule],
  templateUrl: './caracteristicas-gla.html',
  styleUrl: './caracteristicas-gla.css',
})
export class CaracteristicasGla {}
