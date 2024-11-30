export class BikerSizing {
  public height: number;
  public inseam: number;
  public torso: number;
  public arm: number;
  public footSize: number;
  public tibiaSize: number;
  public femurSize: number;
  constructor() {
    this.height = 179;
    this.inseam = 82;
    this.torso = 67;
    this.arm = 67;
    this.footSize = 42;
    this.tibiaSize = 50;
    this.femurSize = 50;
  }

  public static sizingData(): Array<{
    name: string;
    type: string;
    label: string;
    placeholder: string;
  }> {
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
