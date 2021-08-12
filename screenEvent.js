/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import analytics from '@segment/analytics-react-native';
import firebase from '@segment/analytics-react-native-firebase';

export default class ScreenEvent extends React.Component{
  constructor(props){
    super(props);

    this.state={
      screenName:'Screen Name',
      property: 'Property',
      value: 'Value',
      props: {}
    }
  }

onChangeScreenName = (val) => {
  this.setState({screenName: val})
  console.log(this.state)
}

onChangeProperty = (val) => {
  this.setState({property: val})
  console.log(this.state)
}

onChangeValue = (val) => {
  this.setState({value: val})
  console.log(this.state)
}

onSubmitEditingScreenName = (val) => {
  this.setState({screenName: val})
  console.log(this.state)
}

onSubmitEditingProperty = (val) => {
  this.setState({property: val})
  console.log(this.state)
}

onSubmitEditingValue = (val) => {
  this.setState({value: val})
  console.log(this.state)
}

onSendEvent = async() => {
  let name = this.state.screenName
  let properties = this.state.props

  await analytics.screen(name, properties)
  await analytics.flush()
}

onPress = async() => {
  const propertyName = this.state.property
  const value = this.state.value
  let propsObj =  {...this.state.props, [propertyName]:value}
  await this.setState({props: propsObj})
  console.log(this.state)
  await this.setState({property: 'Property', value:'Value'})
}

  render(){
    let props = JSON.stringify(this.state.props)
    return(
      <View style={styles.trackBody}>
        <Text style={{color: '#49b48c',  fontSize:16, fontWeight:'800'}}>Screen Event</Text>
        <View style={styles.eventData}>
          <TextInput
            style={{ height: 40, width: 220, borderColor: 'gray', borderWidth: 1, backgroundColor:'#fff', marginTop:5, paddingLeft:10, color: '#49b48c' }}
            onChangeText={text => this.onChangeScreenName(text)}
            value={this.state.screenName}
            onSubmitEditing={text => this.onSubmitEditingScreenName(text)}
            onFocus={ () => this.setState({screenName:''})}
          />
        </View>
        <View style={styles.eventProps}>
          <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor:'#fff', marginTop:5, paddingLeft:10, color: '#49b48c' }}
            onChangeText={text => this.onChangeProperty(text)}
            value={this.state.property}
            onSubmitEditing={text => this.onSubmitEditingProperty(text)}
            onFocus={ () => this.setState({property:''})}
          />
          <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor:'#fff', marginTop:5, marginLeft: 20, paddingLeft:10, color: '#49b48c' }}
            onChangeText={text => this.onChangeValue(text)}
            value={this.state.value}
            onSubmitEditing={text => this.onSubmitEditingValue(text)}
            onFocus={ () => this.setState({value:''})}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onPress()}
        >
          <Text style={styles.buttonTitle}>Add Property</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onSendEvent()}
        >
          <Text style={styles.buttonTitle}>Send Event</Text>
        </TouchableOpacity>
        <ScrollView>
          <Text style={styles.traitText}>Current Properties:</Text>
          <Text style={styles.traitText}>{props}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    height:40,
    width: 200,
    backgroundColor:'#49b48c',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#49b48c',
    borderBottomWidth: 0,
    shadowColor: '#fff',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    marginTop: 15
  },
  buttonTitle:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600'
  },
  trackBody:{
    backgroundColor: '#1e1c2b',
    height: 800,
    marginTop: 18,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 35
  },
  eventData:{
    flexDirection: 'row'
  },
  eventProps:{
    flexDirection:'row'
  },
  eventTypeButtonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:25
  },
  eventTypeContainer:{
    marginTop: 30,
    alignItems:'center'
  },
  eventTypeTitle:{
    fontSize: 16,
    color:'#49b48c',
    fontWeight:'600'
  },
  traitText: {
    color: '#fff',
    fontSize: 20
  },
  traitContainer: {
    flexDirection: 'column',
    width: 200
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight:'600',
  },
  titleContainer:{
    justifyContent: 'space-evenly'
  }
});
