import { Routes } from '@angular/router';
import { CaracteristicasAli } from './alientro/caracteristicas-ali/caracteristicas-ali';
import { DesafioAli } from './alientro/desafio-ali/desafio-ali';
import { SituacaoAli } from './alientro/situacao-ali/situacao-ali';
import { CaracteristicasGla } from './glaciarland/caracteristicas-gla/caracteristicas-gla';
import { DesafioGla } from './glaciarland/desafio-gla/desafio-gla';
import { SituacaoGla } from './glaciarland/situacao-gla/situacao-gla';
import { Center } from './center/center'; 

export const routes: Routes = [
      { path: '', component: Center  },

  // 🇦🇱 Alientro
  { path: 'alientro/caracteristicas', component: CaracteristicasAli },
  { path: 'alientro/situacao', component: SituacaoAli },
  { path: 'alientro/desafio', component: DesafioAli },

  // ❄️ Glaciarland
  { path: 'glaciarland/caracteristicas', component: CaracteristicasGla },
  { path: 'glaciarland/situacao', component: SituacaoGla },
  { path: 'glaciarland/desafio', component: DesafioGla }

];
