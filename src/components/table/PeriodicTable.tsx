import { FC, useState } from "react"
import { data, Element, ElementInfo, ElementData } from "../element"
import "./PeriodicTable.scss"

const PeriodicTable: FC = () => {
  const [elementData, setElementData] = useState<ElementData>()

  return (
    <main className='wrapper'>
      <h1>BN Digital Periodic Table of Technology Elements</h1>
      <article id='table'>
        {elementData && <ElementInfo {...elementData} onClose={() => setElementData(undefined)} />}
        {data.map((item) => (
          <Element onClick={() => setElementData(item)} {...item} />
        ))}
      </article>
    </main>
  )
}

export default PeriodicTable
