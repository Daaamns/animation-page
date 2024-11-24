import {
  animate,
  group,
  query,
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

export const navAnimation = trigger('navAnimation', [
  transition('inactive => active', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
  transition('active => inactive', [
    style({ transform: 'translateX(0)' }),
    animate('500ms ease-out', style({ transform: 'translateX(100%)' })),
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