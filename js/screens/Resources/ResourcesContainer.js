import React, { Component } from 'react';
import Resources from './Resources';

export default class ResourcesContainer extends Component {
  static navigationOptions = {
    title: 'Resources',
  };
  constructor(props) {
    super(props);
    this.state = {links:[]};
  }
  
  fetchData = (searchTerm) => {
    //TODO: put this vars in a config file
    let GOOGLE_SEARCH_KEY='AIzaSyCNEAFL_8DTUaEk2FwhiI3xOJz4xl3_QlU'
    let GOOGLE_SEARCH_ENGINE='000456785991468921886:zdbnnimdfaw'
    
    fetch('https://www.googleapis.com/customsearch/v1?key='+GOOGLE_SEARCH_KEY+'&cx='+GOOGLE_SEARCH_ENGINE+'&q='+searchTerm)
    .then((response) => response.json())
    .then((responseJson) => {
      let items = responseJson.items.map(item => {

        return {
          url: item.pagemap.metatags[0]['og:url'] ? item.pagemap.metatags[0]['og:url'] : '',
          title: item.pagemap.metatags[0]['og:title'] ? item.pagemap.metatags[0]['og:title'] : '',
          imageurl: item.pagemap.metatags[0]['og:image'] ? item.pagemap.metatags[0]['og:image'] : 'https://i.cbc.ca/1.4172149.1498079824!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/201472-467835623js001-burgeoning-c.jpg',
          description: item.pagemap.metatags[0]['og:description'] ? item.pagemap.metatags[0]['og:description'] : ''
        };
      });
      this.setState({links:items});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentWillMount() {
    this.fetchData('alcohol+addiction');
  } 
  
  render() {
    return <Resources links={this.state.links} />;
  }
}