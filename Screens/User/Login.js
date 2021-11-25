//archivo que muestra la seccion de login   - Navigator/UserNavigatior
import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import FormContainer from '../../Shared/Form/FormContainer'
import Input from '../../Shared/Form/Input'
import Error from '../../Shared/Error'

//Context
import AuthGlobal from '../../Context/store/AuthGlobal'
import { loginUser } from '../../Context/actions/Auth.actions'

const Login = (props) => {

    const context = useContext(AuthGlobal)

    //estado que almacena el email que ingrese en el formulario
    const [email, setEmail] = useState('')
    //estado que almacena la contraseña que ingrese en el formulario
    const [password, setPassword] = useState('')
    //estado que almacena si ocurre algun error en el formulario
    const [error, setError] = useState("")

    useEffect(() => {
        if(context.stateUser.isAuthenticated === true) {
            props.navigation.navigate("UserProfile")
        }
    }, [context.stateUser.isAuthenticated])

    //funcion qal presionar acceder en el formulario
    const handleSubmit = () => {
        const user = {
            email,
            password
        }

        if (email === "" || password === "") {
            setError("Tiene que ingresar usuario y contraseña")
        }else {
            loginUser(user, context.dispatch)
        }
    }

    return (
        //formulario de login
        <FormContainer title={"Acceder"}>
            {/*Email */}
            <Input
                placeholder={"Ingresa tu email"}
                name={"email"}
                id={"email"}
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
            />
            {/*Contraseña */}
            <Input
                placeholder={"Ingresa tu contraseña"}
                name={"password"}
                id={"password"}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={[styles.buttonGroup, {marginTop: 30}]}> 
                {/*si el estado error tiene algo le pasamos la propiedad del error al componente Error */}
                {error ? <Error message={error}/> : null} 
                <Button 
                    title="Acceder"
                    onPress={() => handleSubmit()}
                />
            </View>
            <View style={[styles.buttonGroup, {marginTop: 40}]}>  
                <Text style={styles.middleText}>
                    ¿Aún no tienes una cuenta?
                </Text>
                <Button 
                    title="Registrate" 
                    onPress={() => props.navigation.navigate("Register")}
                />
            </View>
        </FormContainer>
    )
}

export default Login

const styles = StyleSheet.create({
    buttonGroup: {
        width: "80%",
        alignItems: "center",
      },
      middleText: {
        marginBottom: 20,
        alignSelf: "center",
      },
})
