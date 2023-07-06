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

export interface ICubeFaces {
  front_name: string
  back_name: string
  right_name: string
  left_name: string
  top_name: string
  bottom_name: string
}
