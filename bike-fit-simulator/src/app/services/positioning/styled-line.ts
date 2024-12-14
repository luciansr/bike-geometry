import { Line } from './line';
import { Position } from './position';

export class StyledLine implements Line {
  style: string
  constructor(
    public start: Position,
    public end: Position,
    lineStyle: LineStyle
  ) {
    this.style = lineStyle;
  }
}

export enum LineStyle {
  RED = 'stroke: red; stroke-width: 2',
}
