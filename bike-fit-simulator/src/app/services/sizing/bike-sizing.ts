import Sizing from './sizing';

export class BikeSizing {
  public height: number = 179;
  public inseam: number = 82;
  public torso: number = 67;
  public arm: number = 67;
  public footSize: number = 42;
  public tibiaSize: number = 50;
  public femurSize: number = 50;

  public static sizingData(): Array<Sizing> {
    return [
      {
        name: 'height',
        type: 'number',
        label: 'Height',
        placeholder: '179cm',
      },
      {
        name: 'inseam',
        type: 'number',
        label: 'Inseam',
        placeholder: '82cm',
      },
      {
        name: 'torso',
        type: 'number',
        label: 'Torso',
        placeholder: '67cm',
      },
      {
        name: 'arm',
        type: 'number',
        label: 'Arm',
        placeholder: '67cm',
      },
      {
        name: 'footSize',
        type: 'number',
        label: 'Foot Size',
        placeholder: '42',
      },
      {
        name: 'tibiaSize',
        type: 'number',
        label: 'Tibia Size',
        placeholder: '50',
      },
      {
        name: 'femurSize',
        type: 'number',
        label: 'Femur Size',
        placeholder: '50',
      },
    ];
  }
}
