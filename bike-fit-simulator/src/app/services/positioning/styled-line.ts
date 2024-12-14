import { Line } from './line';
import { Position } from './position';

export class StyledLine implements Line {
  lineStyle: LineStyle;
  style: string
  constructor(
    public start: Position,
    public end: Position,
    lineStyle: LineStyle
  ) {
    this.style = lineStyle;
    this.lineStyle = lineStyle;
  }
}

export enum LineStyle {
  RED = 'stroke: red; stroke-width: 2',
}
