import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {
  // El decorador input se utiliza para pasar informacion permitiendo que los componentes padres puedan pasar informacion a sus hijos
  // aca mismo le estamos diciendo que este componente puede recibir informacion que debe cumplir con la interfaz de Product o puede ser undefined
  @Input() product:Product | undefined;
  @Output() notify = new EventEmitter();

}
