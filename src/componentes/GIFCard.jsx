const GIFCard = ({url, title}) => {
    return (
        <a href={url} className="GIFCard relative animate-slideIn transition transform md:hover:scale-105 flex mb-[1.5rem] min-h-[10rem] w-full before:animate-pulse before:animation-duration-100 before:bg-slate-700 before:h-full before:w-full before:block before:rounded-lg before:min-h-[10rem] before:absolute">
            <img src={url} alt={title} className="h-full w-full rounded-lg m-auto relative"/>
        </a>
    )
}
export default GIFCard