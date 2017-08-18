import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <FlexDimensionsBasics></FlexDimensionsBasics>
    );
  }
}

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        <View style={{width: 300, height: 300, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}}> 
          <View style={{flex: 3, flexDirection: 'column'}}> 
          <View style={{flex: 1, backgroundColor: 'red'}} />
          <View style={{flex: 2, backgroundColor: 'pink'}} />
          </View>
        </View>
      </View>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello world!</Text>

      </View>
    )
  }
}

class Bananas extends Component {

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <BlinkApp></BlinkApp>
        <Text>{this.props.children}</Text>
      <Image source={pic} style={{width: 193, height: 110}}></Image>
      </View>
    )
  }
}

class Blink extends Component {
  state = {
    showText : true
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
