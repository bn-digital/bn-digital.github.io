import React, { FC, MouseEventHandler } from "react"
import { ElementData } from "."
import "./ElementInfo.scss"
import { Get } from "simple-icons"

type ElementInfoProps = Pick<
  ElementData,
  "density" | "molarHeat" | "melt" | "source" | "atomicMass" | "summary" | "category" | "icon" | "symbol" | "name" | "appearance"
> & {
  onClose: MouseEventHandler
}

const ElementInfo: FC<ElementInfoProps> = ({
  category,
  melt,
  icon,
  molarHeat,
  symbol,
  density,
  name,
  summary,
  atomicMass,
  appearance,
  source,
  onClose,
}) => {
  return (
    <>
      <div id='element-box' className={`${category.replaceAll(" ", "-").toLowerCase()}`}>
        <div className='icon' dangerouslySetInnerHTML={{ __html: icon && Get(icon).svg }} />
        <div className='symbol'>{symbol}</div>
        <div className='element-name'>{name}</div>
      </div>
      <div id='information'>
        <div onClick={onClose} className='close-button' title='Close Info'>
          Close [&times;]
        </div>
        <div>
          {name && (
            <h1>
              {name}
              <sup className={`category ${category.replaceAll(" ", "-").toLowerCase()}`}>{category}</sup>
            </h1>
          )}
        </div>
      </div>
    </>
  )
}

export { ElementInfo }
