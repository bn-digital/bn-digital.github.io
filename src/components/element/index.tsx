import "./index.scss"

export interface ElementData {
  row: number
  col: number
  number: number
  name: string
  category: string
  symbol: string
  atomicMass: number
  density: number | null
  molarHeat: number | null
  icon: string
  appearance: string | null
  melt: number | null
  summary: string
  boil: number | null
  source: string
}

export { Element } from "./Element"
export { ElementInfo } from "./ElementInfo"
export { default as data } from "./index.json"
