import { useEffect, useState } from "react"
import GIFsSearch from "./componentes/GIFsSearch"
import Header from "./componentes/Header"
import GIFsList from "./componentes/GIFsList"

const App = () => {
  const [search, setSearch] = useState("")
  const [scrollY, setScrollY] = useState(document.body.scrollHeight)
  const [scrollBody, setScrollBody] = useState(0)
  const [bottom, setBottom] = useState(false)

  useEffect(() => {
    const WindowH = window.innerHeight
    const currentScrollY = document.body.scrollHeight
    const onScroll = e => {
      setScrollY(e.target.documentElement.scrollTop)
      setScrollBody(scrollY + WindowH)
    }
    if(scrollBody+100 > currentScrollY && scrollY > 0) setBottom(true)
    else setBottom(false)

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [ scrollY ])
  
  return (
    <>
      {/* <code className="fixed text-white z-10" >
        {WindowH} | {scrollY} | {scrollBody} | {currentScrollY} | {JSON.stringify(bottom)}
      </code> */}
      <Header />
      <GIFsSearch setSearch={setSearch}/>
      <GIFsList search={search} bottom={bottom} />
    </>
  )
}

export default App

