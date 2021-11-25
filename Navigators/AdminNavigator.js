//archivo que contiene la navegacion principal del menu de admin - Navigators/Main
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import Products from '../Screens/Admin/Products';
import Categories from '../Screens/Admin/Categories';
import Order from '../Screens/Admin/Order';
import ProductForm from '../Screens/Admin/ProductForm';

const Stack = createStackNavigator();

function MyStack()  {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Products"
                component={Products}
                options={{
                    title: "Productos"
                }}
            />
            <Stack.Screen 
                name="Categories"
                component={Categories}
            />
            <Stack.Screen 
                name="Order"
                component={Order}
            />
            <Stack.Screen 
                name="ProductForm"
                component={ProductForm}
            />
        </Stack.Navigator>
    )
}

export default function AdminNavigator() {
    return <MyStack/>
}

const styles = StyleSheet.create({})
