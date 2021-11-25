//archivo que muestra el perfil de usuario registrado  - Navigator/UserNavigatior
import React, { useState, useContext, useCallback } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { Container } from 'native-base'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import axios from 'axios'
import baseURL from '../../assets/common/baseURL'

import AuthGlobal from '../../Context/store/AuthGlobal'
import { logoutUser } from '../../Context/actions/Auth.actions'
import { useEffect } from 'react/cjs/react.development'


const UserProfile = (props) => {

    const context = useContext(AuthGlobal)
    //estado que almacena los datos del usuario
    const [userProfile, setUserProfile] = useState()
    

    //validamos que este un usuario registrado
    useEffect(() => {
        //si la autenticacion en falsa o nula retornamos a login
        if(context.stateUser.isAuthenticated === false || context.stateUser.isAuthenticated === null) {
            props.navigation.navigate("Login")
        }

        AsyncStorage.getItem("jwt")
            .then((res) => {
                axios.get(`${baseURL}users/${context.stateUser.user.userId}`, {
                    headers: { Authorization: `Bearer ${res}` },
                })
                .then((user) => setUserProfile(user.data))
                //console.log("context", context.stateUser.user.userId);
                
                //18.151
            })
            .catch((error) => console.log(error))
        
        return () => {
            setUserProfile()
        }

    }, [context.stateUser.isAuthenticated])


    return (
        <Container style={styles.container}>
           <ScrollView contentContainerStyle={styles.subContainer}>
               <Text style={{ fontSize: 30 }}>
                   {userProfile ? userProfile.name : "" }
               </Text>
               <View style={{ marginTop: 20 }}>
                    <Text style={{ margin: 10 }}>
                        Email: {userProfile ? userProfile.email : ""}
                    </Text>
                    <Text style={{ margin: 10 }}>
                        Phone: {userProfile ? userProfile.phone : ""}
                    </Text>
               </View>
               <View style={{ marginTop: 80 }}>
                    <Button title={"Cerrar Sesion"} onPress={() => [
                        AsyncStorage.removeItem("jwt"),
                        logoutUser(context.dispatch)
                    ]}/>
               </View>
               
           </ScrollView>
       </Container>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    subContainer: {
        alignItems: "center",
        marginTop: 60
    },
    order: {
        marginTop: 20,
        alignItems: "center",
        marginBottom: 60
    }
})
