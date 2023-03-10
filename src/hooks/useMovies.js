import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getRecomendedMovies, getTopMovies,getFilterMovies, getDetailMovie, getSimilarMovies } from "../redux/movies/moviesSlice"


const useMovies = () =>{
    const {topMovies, recommendedMovies, filterMovies, detailMovie, similarMovies} = useSelector((state)=>state.moviesSlice)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getTopMovies()),
        dispatch(getRecomendedMovies()),
        dispatch(getFilterMovies()),
        dispatch(getDetailMovie()),
        dispatch(getSimilarMovies())
    },[])

    return {topMovies, recommendedMovies, filterMovies, detailMovie, similarMovies } 
}

export default useMovies