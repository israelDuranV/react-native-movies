import { StyleSheet, View, Text, Image } from "react-native";
import React, { useState } from "react";
import { yellow } from "@mui/material/colors";

const Rating = ({rating})=>{
        const starLevel = rating / 2
        const [maxRating, setmaxRating] = useState([1,2,3,4,5])
        const starImgFilled = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png"
        const starImgCorner = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png"

        return <View style={styles.customRatingBarStyle}>
                    {
                        (maxRating.map((item, key)=>{
                            return (
                                <Image
                                key={key}
                                style={styles.starImageStyle}
                                source={
                                    item<=starLevel
                                    ? {uri: starImgFilled}
                                    : {uri: starImgCorner}
                                }
                            />
                            )
                        })
                    )}
                </View>
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        padding:15
    },
    textStyle: {
        textAlign:'center',
        fontSize:23
    },
    customRatingBarStyle:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        padding:8
    },
    starImageStyle:{
        width:25,
        height:25,
        resizeMode: 'cover',
        margin: 5
    }
})
export default Rating