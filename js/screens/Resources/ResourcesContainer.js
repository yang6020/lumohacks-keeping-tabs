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
  render() {
    //TODO: return graph QL for dummy
    return <Resources links={dummy}/>;
  }
}