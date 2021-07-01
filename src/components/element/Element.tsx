import React, { FC, MouseEventHandler, ReactElement } from "react"
import { ElementData } from "."
import "./Element.scss"
import { Get } from "simple-icons"

type ElementProps = Pick<ElementData, "col" | "row" | "name" | "icon" | "category" | "number" | "symbol"> & { onClick: MouseEventHandler }

const Element: FC<ElementProps> = ({ row, col, name, category, icon, number, symbol, onClick }) => {
  return (
    <section
      style={{ gridRow: row, gridColumn: col }}
      onClick={onClick}
      title={name}
      className={`element element-${number} ${category.replaceAll(" ", "-").toLowerCase()}`}
    >
      <div className='number'>
        <span className={"icon"} dangerouslySetInnerHTML={{ __html: icon && Get(icon).svg }} />
      </div>
      <div className='symbol'>{symbol}</div>
      <div className='element-name'>{name}</div>
    </section>
  )
}

export { Element }
