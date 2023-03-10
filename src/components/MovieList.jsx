import { StyleSheet, View, Text, ImageBackground, FlatList } from "react-native";
import Movie from "./Movie";

const MovieList = ({list, title}) =>{
    const renderItem = ({item}) => <Movie info={item}/>
    return (
        <View style={{flex:1}}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                data={list}
                renderItem={renderItem}
                horizontal={true}
                keyExtractor={(item)=>item.id}
                showsHorizontalScrollIndicator={false}
                >
            </FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    }
})
export default MovieList