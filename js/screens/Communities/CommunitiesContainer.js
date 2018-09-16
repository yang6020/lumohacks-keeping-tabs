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
    this.fetchReddit('https://www.reddit.com/r/alcohol/hot/');
  } 
  
  fetchReddit = (thread) => {
    fetch(thread+'.json?limit=2')
    .then((response) => response.json())
    .then((responseJson) => {
      let currentLinks = this.state.links;
      let item = responseJson.data.children[1].data;
      console.log(item.thumbnail);
      let link = {
        url: thread,
        title: item.title,
        imageurl: item.thumbnail === "self" || !item.thumbnail ? 'http://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.png' : item.thumbnail,
        description: item.selftext.length > 400 ? item.selftext.substring(0,399)+'...' : item.selftext
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
