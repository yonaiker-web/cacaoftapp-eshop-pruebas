//archivo que ordena los productos exportados desdes la base de datos - Screens/Admin/Products
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,TouchableHighlight, Dimensions, Button, ScrollView, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

var { height, width } = Dimensions.get("window")

const ListItme = (props) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View >
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                          underlayColor="#E8E8E8"  
                          onPress={() => {
                              setModalVisible(false)
                          }}
                          style={{
                              alignSelf: "flex-end",
                              position: "absolute",
                              top: 5,
                              right: 10,
                              margin: 5
                          }}
                        >
                            <Icon name="close" size={20} />
                        </TouchableOpacity>
                        <Button title="Editar"
                            onPress={() => [
                                props.navigation.navigate("ProductForm"),
                                setModalVisible(false)
                            ]}                            
                        />
                        <Button title="Eliminar"
                            //eliminar
                        />
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
                style={[styles.container, {backgroundColor: props.index % 2 == 0 ? "white" : "gainsboro"}]}
                onPress={() => {
                    props.navigation.navigate("Product Detail", { item: props})
                }}
                onLongPress={() => setModalVisible(true)}
            >
                <Image
                    style={styles.image}
                    source={{uri: props.image ? props.image : 'https://lh3.googleusercontent.com/proxy/uQvR9ndsIDeJiK1ke7FElMh0iiSW3XHFkHpQgE2uGa_t4bdxksM4jGvMiPkRrIvgDvhIMb7A9fk22ENqIlT8-E7QHJpriTf6iOMrY2AkhANCCxvpXTl3_s2OSqB8-YKR'}}
                    resizeMode="contain"
                />
                <Text style={styles.item}>{props.brand}</Text>
                <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail" >{props.name}</Text>
                <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail" >{props.category.name}</Text>
                <Text style={styles.item}>${props.price}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListItme

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        width: width,
    
    },
    image: {
        borderRadius: 50,
        width: width / 6,
        height: 20,
        margin: 2
    },
    item: {
        flexWrap: "wrap",
        margin: 3,
        width: width / 6
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50
    },
    textStyle: {
        color: "white",
        fontWeight: "bold"
    }
})
