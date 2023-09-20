import { useState, useEffect } from "react"
import Masonry from 'react-masonry-css'
import Error from './Error'
import GIFCard from "./GIFCard"
import { getGifs } from "../assets/utils/api"

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

const GIFsList = ({ search, bottom }) => {
    const [GIFs, setGIFs] = useState([])
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const loadData = (pg = 0) => {        
        setIsLoading(true)
        setPage(pg)
        getGifs(search, pg)
        .then(({data}) => {
            setGIFs((currentData) => {
                if(currentData.length === 0) return data
                else return ([...currentData, ...data])
            })
            setIsLoading(false)
        })
        .catch((err) => setIsError(true))
    }

    // Load after scrolling
    useEffect(() => {
        if(bottom && !isLoading) loadData(page + 1)
    }, [ bottom ])

    // First load
    useEffect(() => {
        setPage(0)
        setGIFs([])
        loadData()
    }, [ search ])

    if (isError) 
        <Error />
    else {
        return (
            <>
                {isLoading && <div className="w-16 h-16 rounded-full fixed z-50 top-0 left-0 right-0 bottom-0 m-auto animate-spin border-4 border-gray-700 border-t-pink-500 bg-gray-700 bg-opacity-80"></div>}
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-6">
                        {(GIFs || []).map(({images:{original:{url}}, id, title}, i) => {
                            return <GIFCard url={url} key={i + id} title={title}/>
                        })}
                </Masonry>
            </> 
        )
    }
}

export default GIFsList