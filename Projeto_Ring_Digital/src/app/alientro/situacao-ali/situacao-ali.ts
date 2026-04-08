import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from '../../layout/alientro/alientro_header/headerAli';
import { Footer } from '../../layout/alientro/alientro_footer/footerAli';

@Component({
  selector: 'app-situacao-ali',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './situacao-ali.html',
  styleUrl: './situacao-ali.css',
})
export class SituacaoAli {}