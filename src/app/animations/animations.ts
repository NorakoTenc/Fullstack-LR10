import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const reusableShakeAnimation = trigger('lambdadeltaShake', [
  transition('* => shake', [
    animate('500ms ease-in-out', keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(-10px)', offset: 0.25 }),
      style({ transform: 'translateX(10px)', offset: 0.5 }),
      style({ transform: 'translateX(-10px)', offset: 0.75 }),
      style({ transform: 'translateX(0)', offset: 1.0 })
    ]))
  ])
]);

// Анімація для "масштабування" (Zoom)
export const reusableZoomAnimation = trigger('bernkastelState', [
  state('normal', style({
    transform: 'scale(1)',
    backgroundColor: '#9c27b0'
  })),
  state('zoomed', style({
    transform: 'scale(1.2)',
    backgroundColor: '#673ab7'
  })),
  transition('normal <=> zoomed', animate('300ms ease-in-out'))
]);
