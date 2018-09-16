import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const DrinkModal = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.question}>Did you Drink today?</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonYes}>
                    <Text>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonNo}>
                    <Text>No</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default DrinkModal


