import { ImageBackground, StyleSheet, Text, ScrollView, View, Dimensions, TouchableOpacity } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useNavigation } from "@react-navigation/native"
import Rating from "./Rating"
import Genres from "./Genres"
import MovieList from "./MovieList"
import useMovies from "../hooks/useMovies"

const height = Dimensions.get('screen').height

const MovieContent = ({info}) =>{
    const navigation = useNavigation()
    const handleBack = ()=>{
        navigation.goBack()
    }
    const {similarMovies} = useMovies();
    return (<View style={styles.container}>
        <ScrollView>
            <ImageBackground 
            style={styles.image}
            source={{ uri: 'https://www.themoviedb.org//t/p/w220_and_h330_face/' + info['poster_path'] }}
            resizeMode={'cover'}
            >
            <TouchableOpacity 
            name='chevron-left' 
            size={24} 
            color='white'
            onPress={handleBack}
            style={styles.backButton}>
                <FontAwesome.Button 
                name="chevron-left" 
                backgroundColor="#3b5998"
                onPress={handleBack}
                >
                </FontAwesome.Button>
            </TouchableOpacity>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>{info['title']}</Text>
                <Rating rating={info['vote_average']}></Rating>
                <Genres genres={info['genres']}></Genres>
            </View>
            </ImageBackground>
            <Text style={styles.subTittle}>{info['overview']}</Text>
            <MovieList list={similarMovies} title={'Peliculas similares'}></MovieList>
        </ScrollView>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal:10
    },
    image:{
        justifyContent:'flex-end',
        marginBottom:20,
        height:height/2,
        opacity:0.4
    },
    imageStyle:{
        opacity:0.9
    },
    backButton:{
        padding:15,
        position:'absolute',
        zIndex:2,
        top:0,
        marginTop:25
    },
    descriptionContainer:{
        margin:10
    },
    title:{
        fontWeight: 'bold',
        color: 'white',
        fontSize:24,
        marginVertical:6
    },
    subTittle:{
        fontWeight: '500',
        color: 'white',
        fontSize:18,
        marginVertical:6,
        marginHorizontal: 10
    }
})
export default MovieContent