
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { clearDetailMovie, getDetailMovie, getSimilarMovies } from "../redux/movies/moviesSlice"
import Rating from "./Rating"

const Movie = ({ info }) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const handlePress = () => {
        dispatch(clearDetailMovie())
        dispatch(getDetailMovie(info.id))
        dispatch(getSimilarMovies(info.id))
        navigation.navigate('detail')
    }
    return (

            <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.2}
                style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: 'https://www.themoviedb.org//t/p/w220_and_h330_face/' + info.poster_path }}
                >
                </Image>
                <Text
                    numberOfLines={1}
                    style={styles.text}
                >{info.title}
                </Text>
                <Rating rating={info.vote_average}/>
            </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        width: 250,
        alignItems: "center",
        marginBottom: 10
    },
    image: {
        width: 250,
        height: 320,
        backgroundColor: "black"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
        textAlign: "center"
    }
})
export default Movie