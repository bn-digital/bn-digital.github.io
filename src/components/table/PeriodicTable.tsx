import { FC, useState } from "react"
import { data, Element, ElementInfo, ElementData } from "../element"
import "./PeriodicTable.scss"

const PeriodicTable: FC = () => {
  const [elementData, setElementData] = useState<ElementData>()

  return (
    <main className='wrapper'>
      <article id='table'>
        <h1
          style={{
            position: "absolute",
            fontWeight: 900,
            fontSize: "2vw",
            height: "5vw",
            top: 0,
            left: "15vw",
            padding: "0.5vw",
          }}
        >
          BN Digital Periodic Table of Technology Elements
        </h1>
        {elementData && <ElementInfo {...elementData} onClose={() => setElementData(undefined)} />}
        {data.map((item) => (
          <Element onClick={() => setElementData(item)} {...item} />
        ))}
      </article>
    </main>
  )
}

export default PeriodicTable
