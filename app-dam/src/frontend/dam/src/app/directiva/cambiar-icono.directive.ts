import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCambiarIcono]',
  standalone: true
})
export class CambiarIconoDirective implements OnChanges {

  @Input() estado: number | null = 0; 
  iconoOn: string = 'assets/media/on.png'; 
  iconoOff: string = 'assets/media/off.png'; 

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.actualizarIcono();
  }

  private actualizarIcono(): void {
    const src = this.estado === 1 ? this.iconoOn : this.iconoOff;
    this.renderer.setAttribute(this.el.nativeElement, 'src', src);
  }
}