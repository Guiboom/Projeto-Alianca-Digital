import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from '../../layout/alientro/alientro_header/headerAli';
import { Footer } from '../../layout/alientro/alientro_footer/footerAli';

@Component({
  selector: 'app-desafio-ali',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './desafio-ali.html',
  styleUrl: './desafio-ali.css',
})
export class DesafioAli {}