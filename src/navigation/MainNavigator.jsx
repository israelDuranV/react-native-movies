import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'

const MainNavigator = ()=>{
const Stack = createNativeStackNavigator()
const theme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        background:'#02194d',
    }
}
    return(<NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{header: ()=>null }}>
                <Stack.Screen name="home" component={Home}></Stack.Screen>
                <Stack.Screen name="detail" component={MovieDetails}></Stack.Screen>
             </Stack.Navigator>
            </NavigationContainer>)
}

export default MainNavigator