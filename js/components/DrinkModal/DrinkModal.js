import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const DrinkModal = ()=> {
    return(
<View>
    <View>
        <Text> Go Back </Text>    
    </View>

    <View>
    <Text>Did you Drink today?</Text>

    <TouchableOpacity>
    <Text>Yes</Text>
    </TouchableOpacity>

    <TouchableOpacity>
    <Text>No</Text>
    </TouchableOpacity>
    </View>
</View>

    )
}

export default DrinkModal
