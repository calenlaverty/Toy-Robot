export type Coordinate = { x: number; y: number };

export type State = {
  position: Coordinate;
  facing: string;
  onSurface: any;
};
