import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from "react-native-vector-icons/Ionicons";


const DrinkModal = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                    style={{ marginLeft: 10 }}
                    name="md-close"
                    onPress={() => navigation.navigate("Calendar")}
                    color="#e6e6e6"
                    size={23}
                />
            </View>
            <View style={styles.questionContainer}>
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
        </View>

    )
}

export default DrinkModal


