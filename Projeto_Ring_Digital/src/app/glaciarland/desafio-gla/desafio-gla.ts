import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from '../../layout/glaciarland/glaciarland_header/headerGla';
import { Footer } from '../../layout/glaciarland/glaciarland_footer/footerGla';

@Component({
  selector: 'app-desafio-gla',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './desafio-gla.html',
  styleUrl: './desafio-gla.css',
})
export class DesafioGla {}