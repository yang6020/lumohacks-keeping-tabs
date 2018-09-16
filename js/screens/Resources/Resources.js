import React from 'react';
import { Text, View, Linking, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import styles from './styles';
const Resources = ({ navigation, links }) => {
  
  handleClick = (link) => {
    Linking.openURL(link.url).catch(
      err => {
        Alert.alert(
          'Unreachable Link',
          'Unable to open ' + link.title + '. Please try another resource.',
          [{text:'Ok', onPress: () => console.log('Ok pressed')}]
        );
      }
    );
  };
  
  return (
    <ScrollView>
    <View style={styles.container}>
      {
        links.map(
          link => (
            <Card
              key={link.title}
              title={link.title}
              image={{uri:link.imageUrl}}
              containerStyle={styles.card}
              >
              <Text style={{marginBottom: 10}}>
                {link.description}
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={styles.button}
                onPress={() => this.handleClick(link)}
                title='READ MORE' />
            </Card>
            )
          )
        }
    </View>
    </ScrollView>
  );
};
export default Resources;