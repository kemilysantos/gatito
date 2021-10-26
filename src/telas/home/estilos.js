import { StyleSheet } from "react-native";
import { cores } from "../../estilos";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default StyleSheet.create({
    page:{
        backgroundColor: cores.roxo,
        width: vw(100), 
        height: vh(100)  
    },
    login__logomarca:{
        color: cores.laranja,
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
        marginTop: 150

    },
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 4,
        marginTop: 30,
        marginLeft: 250,
        marginRight: 250,
        borderRadius: 5,
        
    },
    button:{
        marginTop: 80,
        backgroundColor: '#0bd411',
        padding: 12,
        borderRadius: 5,
        marginLeft: 600,
        marginRight:600,
        cursor: 'pointer',
    },
    textbutton: {
        textAlign:'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 21
    }
})