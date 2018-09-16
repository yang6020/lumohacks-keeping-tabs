import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Linking
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import styles from './styles';

const Communities = ({ navigation, links}) => {
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
              key={link.url}
              title={link.title}
              image={{uri:link.imageurl}}
              imageStyle={styles.cardImage}
              containerStyle={styles.card}
              >
              <Text style={styles.subreddit}>
                {link.subreddit}
              </Text>
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
