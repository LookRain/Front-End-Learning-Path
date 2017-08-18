import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default class App extends React.Component {
  onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this.onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this.onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

function ButtonBasics() {
  return (<Button
    onPress={() => { Alert.alert('You tapped the button!')}}
    title="Press Me"
  />)
}



class PizzaTranslator extends Component {
  state = {
    text: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text.split(' ').map(word => word && '🍕').join('-')}</Text>


        <TextInput 
        style={{height: 40}} 
        placeholder="Type here for translation!" 
        onChangeText={text=>{this.setState({text})}}>
        </TextInput>
      
      </View>
    )
  }
}


class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        //Available options are flex-start, center, flex-end, and stretch
      }}>
        <View style={{height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

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

class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
        //flex-start, center, flex-end, space-around, and space-between.
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

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
          <View style={{flex: 3, flexDirection: 'column',justifyContent: 'space-between'}}> 
          <View style={{flex: 1, backgroundColor: 'red'}}><Text>hello world!</Text></View>
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
   justifyContent: 'center',
   backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})