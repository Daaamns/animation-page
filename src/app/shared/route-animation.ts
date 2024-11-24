import {
  animate,
  group,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slider = trigger('routeAnimation', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right')),
]);

export const moveCardsRight = trigger('moveCardsRight', [
  state(
    'open',
    style({
      transform: 'translateX(0)', // Position initiale
    })
  ),
  state(
    'closed',
    style({
      transform: 'translateX(100vw)', // Position finale
    })
  ),
  transition('open => closed', [
    query(
      '.menu-item',
      stagger(100, [
        animate('20s ease-out', style({ transform: 'translateX(100vw)' })),
      ]),
      { optional: true }
    ),
  ]),
]);

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('900ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('900ms ease', style({ [direction]: '0%' }))]),
    ]),
  ];
}
