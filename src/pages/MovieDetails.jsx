import { View, Text, StyleSheet } from "react-native"
import MovieContent from "../components/MovieContent"
import useMovies from "../hooks/useMovies"

const MovieDetails = ()=>{
    const {detailMovie } = useMovies()
    return (<View>
        {detailMovie?.id && <MovieContent info={detailMovie}/>}
            </View>)
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
        marginTop:100,
        textAlign: "center"
    }
})
export default MovieDetails