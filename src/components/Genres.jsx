import { StyleSheet,View,Text } from "react-native";


const Genres = ({genres = []})=>{
        return <View style={styles.container}>
        {
        genres.map((g,index)=>{
            return(
                <View key={index} style={styles.gereContainer}>
                     <Text style={styles.textGenres}>
                        {g.name}
                     </Text>
                </View>

            )
        })

      }
        </View>

}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop:30,
        color: 'white'
    },
    gereContainer:{
        backgroundColor: 'aqua',
        padding:4,
        borderRadius:8,
        marginRight:8
    },
    textGenres:{
        fontWeight:'600',
        color:"white",
        fontSize:16,
        marginVertical:6
    }
})
export default Genres;