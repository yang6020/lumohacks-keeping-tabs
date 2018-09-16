import React, { Component } from 'react';
import Resources from './Resources';

const dummy = [
  {
    url:"https://google.ca",
    imageurl: "https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    title: "Google",
    description: "lorem ipsum muh fucka"
  },
  {
    url: "https://github.com",
    imageurl: "https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png",
    title: "Github",
    description: "this is github dawg"
  },
  {
    url: "ASS",
    title: "ass",
    imageurl: "https://cdn3.vectorstock.com/i/1000x1000/56/67/different-bum-sizes-icons-large-flat-big-smal-vector-17125667.jpg",
    description: "asswipe"
  }
]

export default class ResourcesContainer extends Component {
  static navigationOptions = {
    title: 'Resources',
  };
  constructor(props) {
  super(props);
  this.state = {links:[]};
}

componentWillMount() {
  //TODO: put this vars in a config file
  let GOOGLE_SEARCH_KEY='AIzaSyCNEAFL_8DTUaEk2FwhiI3xOJz4xl3_QlU'
  let GOOGLE_SEARCH_ENGINE='000456785991468921886:zdbnnimdfaw'
  let GRAPH_COOL_URL='https://api.graph.cool/simple/v1/cjm49ftxt4kgu0100984ridlk'
  
  fetch('https://www.googleapis.com/customsearch/v1?key='+GOOGLE_SEARCH_KEY+'&cx='+GOOGLE_SEARCH_ENGINE+'&q=alcohol+addiction')
  .then((response) => response.json())
  .then((responseJson) => {
    let items = responseJson.items;
    items.map(item => {
      return {
        url: item.pagemap.metatags[0].['og:url']
        title: item.pagemap.metatags[0].['og:title']
        imageurl: item.pagemap.metatags[0].['og:image'],
        description: item.pagemap.metatags[0].['og:description']
      }
    });
    this.setState({links:items});
  })
  .catch((error) => {
    console.error(error);
  });
}
  
  render() {
    return <Resources links={this.state.links}/>;
  }
}