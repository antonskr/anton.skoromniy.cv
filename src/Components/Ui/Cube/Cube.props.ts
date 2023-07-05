export interface IDirections {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
    front: [number, number]
    right: [number, number]
    back: [number, number]
    left: [number, number]
    top: [number, number]
    bottom: [number, number]
  }