import Sizing from './sizing';

export class BikeSizing {
  public reach = 378;
  public stack = 590;
  public seatHeight = 750;
  public seatTubeAngle = 73.5;
  public seatSetBack = 0;
  public headTubeAngle = 73;
  public handlebarSpacers = 27.5;
  public stemSize = 100;
  public stemAngle = -7;


  public static sizingData(): Sizing[] {
    return [
      {
        name: 'reach',
        type: 'number',
        label: 'Reach (mm)',
        placeholder: '378'
      },
      {
        name: 'stack',
        type: 'number',
        label: 'Stack (mm)',
        placeholder: '590'
      },
      {
        name: 'seatHeight',
        type: 'number',
        label: 'Seat height (mm)',
        placeholder: '750'
      },
      {
        name: 'seatTubeAngle',
        type: 'number',
        label: 'Seat tube angle (°)',
        placeholder: '73.5'
      },
      {
        name: 'seatSetBack',
        type: 'number',
        label: 'Seat set back (mm)',
        placeholder: '0'
      },
      {
        name: 'headTubeAngle',
        type: 'number',
        label: 'Head tube angle (°)',
        placeholder: '73'
      },
      {
        name: 'handlebarSpacers',
        type: 'number',
        label: 'Handlebar spacers (mm)',
        placeholder: '27.5'
      },
      {
        name: 'stemSize',
        type: 'number',
        label: 'Stem size (mm)',
        placeholder: '100'
      },
      {
        name: 'stemAngle',
        type: 'number',
        label: 'Stem angle (°)',
        placeholder: '-7'
      }
    ]
  }
}
