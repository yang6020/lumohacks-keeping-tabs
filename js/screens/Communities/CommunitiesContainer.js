import React, { Component } from 'react';
import Communities from './Communities';
import { REDDIT_URL } from 'react-native-dotenv'

export default class CommunitiesContainer extends Component {
  static navigationOptions = {
    title: 'Communities',
  };
  constructor(props) {
    super(props);
    this.state = { links: [] };
  }

  componentWillMount() {
    this.fetchReddit('/r/alcoholism/hot/');
    this.fetchReddit('/r/stopdrinking/hot/');
    this.fetchReddit('/r/cripplingalcoholism/hot/');
    this.fetchReddit('/r/alcoholicsanonymous/hot/');
    this.fetchReddit('/r/AlAnon/hot/');
    this.fetchReddit('/r/SMARTRecovery/hot/');
  }

  fetchReddit = (thread) => {
    fetch(REDDIT_URL + thread + '.json?limit=5')
      .then((response) => response.json())
      .then((responseJson) => {
        let currentLinks = this.state.links;
        let children = responseJson.data.children;
        let item = children.find(child => !child.data.stickied);
        let link = {
          url: REDDIT_URL + thread,
          subreddit: thread.substring(0, thread.length - 4),
          title: item.data.title,
          imageurl: item.data.thumbnail === "self" || !item.data.thumbnail ? 'http://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.png' : item.data.thumbnail,
          description: item.data.selftext.length > 400 ? item.data.selftext.substring(0, 399) + '...' : item.data.selftext
        };
        currentLinks.push(link);
        this.setState({ links: currentLinks });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Communities links={this.state.links} />
    );
  }
}
