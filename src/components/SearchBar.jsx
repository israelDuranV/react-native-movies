import { useState } from "react"
import { StyleSheet, View, TextInput, Alert } from "react-native"
import { useDispatch } from "react-redux"
import useMovies from "../hooks/useMovies"
import { clearFilterResults, getFilterMovies } from "../redux/movies/moviesSlice"

const SearchBar = ()=>{
    const {filterMovies} = useMovies()
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const onChangeText = (text) => {
        setSearchText(text)
        if(filterMovies.length>0){
            dispatch(clearFilterResults())
        }
    }
    const onSearch = ()=>{
        dispatch(getFilterMovies({query: searchText}))
    }
    return (
        <View style={styles.container}>
            <TextInput
            placeholder="Search.."
            maxLength={40}
            style={styles.textInput}
            value={searchText}
            onChangeText={onChangeText}
            onSubmitEditing={onSearch}
            returnKeyType='search'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        marginTop:20,
        borderWidth:1,
        borderRadius:12,
        height:40,
        paddingHorizontal:10
    },
    textInput:{
        backgroundColor:"white",
        flex:1,
    }
})
export default SearchBar