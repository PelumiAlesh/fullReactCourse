import React from "react";
import { connect } from 'react-redux';

import Header from "./components/header";
import Headline from "./components/headline";
import Button from "./components/button";
import ListItem from "./components/listItem";
import { fetchPost } from './actions';


import "./styles.scss";

const tempArr = [{
  fName: 'Joe',
  lName: 'Rugget',
  age: 34,
  onlineStatus: true
}]

class App extends React.Component {
  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchPost()
  }

  render() {
    const {posts} = this.props;
    console.log(this.props)
    const btnConfig = {
      buttonText: 'Get Post',
      emitEvent: this.fetch
    }
    
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header='Post' desc="Click a button to post something" tempArr={tempArr}/>
          <br />
          <Button {...btnConfig}/>
          {!posts ? null :
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
  );
  }

}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps, {fetchPost})(App);
