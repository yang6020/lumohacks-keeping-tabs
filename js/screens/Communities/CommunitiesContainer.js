import React, { Component } from 'react';
import Communities from './Communities';

export default class CommunitiesContainer extends Component {
  static navigationOptions = {
    title: 'Communities',
  };
  constructor(props) {
    super(props);
    this.state = {links:[]};
  }
  
  componentWillMount() {
    this.fetchReddit('https://www.reddit.com/r/alcoholism/hot/');
    this.fetchReddit('https://www.reddit.com/r/stopdrinking/hot/');
    this.fetchReddit('https://www.reddit.com/r/cripplingalcoholism/hot/');
    this.fetchReddit('https://www.reddit.com/r/alcoholicsanonymous/hot/');
    this.fetchReddit('https://www.reddit.com/r/AlAnon/hot/');
    this.fetchReddit('https://www.reddit.com/r/SMARTRecovery/hot/');
  } 
  
  fetchReddit = (thread) => {
    fetch(thread+'.json?limit=5')
    .then((response) => response.json())
    .then((responseJson) => {
      let currentLinks = this.state.links;
      let children = responseJson.data.children;
      let item = children.find(child => !child.data.stickied);
      let link = {
        url: thread,
        subreddit: '/r/'+item.data.subreddit,
        title: item.data.title,
        imageurl: item.data.thumbnail === "self" || !item.data.thumbnail ? 'http://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.png' : item.data.thumbnail,
        description: item.data.selftext.length > 400 ? item.data.selftext.substring(0,399)+'...' : item.data.selftext
      };
      currentLinks.push(link);
      this.setState({links:currentLinks});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <Communities links={this.state.links}/>
    );
  }
}
