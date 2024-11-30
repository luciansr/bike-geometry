import Sizing from './sizing';

export class CyclistSizing {
  public height = 179;
  public inseam = 82;
  public torso = 67;
  public arm = 67;
  public footSize = 42;
  public tibiaSize = 50;
  public femurSize = 50;

  public static sizingData(): Sizing[] {
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
