import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from '../../layout/glaciarland/glaciarland_header/headerGla';
import { Footer } from '../../layout/glaciarland/glaciarland_footer/footerGla';

@Component({
  selector: 'app-situacao-gla',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './situacao-gla.html',
  styleUrl: './situacao-gla.css',
})
export class SituacaoGla {}