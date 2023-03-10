import { TouchableOpacity, Text, Alert, StyleSheet } from "react-native"

const Button = ({title, counter, handlerPress}) =>{

    return <TouchableOpacity
            style={styles.button}
            onPress={handlerPress}>
        <Text>{title} {counter}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 120,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button