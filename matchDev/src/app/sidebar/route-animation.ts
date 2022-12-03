import { trigger, animate, transition, style, group, query } from '@angular/animations';

export const slideInAnimation = 
trigger('slideInAnimation',
 [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(30%)'}),
        animate('0.5s ease-out', style({ transform: 'translateX(0%)'}))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)', opacity: '1' }),
        animate('0.5s ease-out', style({ transform: 'translateY(30%)', opacity: '0' }))
      ], { optional: true })
    ])
  ])
]);
export const routeStateTrigger = trigger('routeState', [
    transition('* => *', [
        query(':enter', [
                style({ opacity: 0 })
            ], { optional: true }
        ),
        group([
            query(':leave', [
                    animate(300, style({ opacity: 0 }))
                ],
                { optional: true }
            ),
            query(':enter', [
                    style({ opacity: 0 }),
                    animate(300, style({ opacity: 1 }))
                ],
                { optional: true }
            )
        ])
    ])
]);