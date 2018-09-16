import React from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import styles from './styles';

const Communities = ({ navigation, links}) => {

  return (
    <ScrollView>
    <View style={styles.container}>
      {
        links.map(
          link => (
            <Card
              key={link.url}
              title={link.title}
              image={{uri:link.imageurl}}
              imageStyle={styles.cardImage}
              containerStyle={styles.card}
              >
              <Text style={styles.text}>
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
export default Communities;
