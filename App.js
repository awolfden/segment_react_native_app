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
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import TrackEvent from './trackEvent.js';
import IdentifyEvent from './identifyEvent.js';
import GroupEvent from './groupEvent.js';
import ScreenEvent from './screenEvent.js'

import analytics from '@segment/analytics-react-native';
import firebase from '@segment/analytics-react-native-firebase';
import amplitude from '@segment/analytics-react-native-amplitude';
import appsflyer from '@segment/analytics-react-native-appsflyer';
// import facebook from '@segment/analytics-react-native-facebook-app-events-ios';
import braze from '@segment/analytics-react-native-appboy';
import mixpanel from '@segment/analytics-react-native-mixpanel';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      event:''
    }
  }

onPress= (val) => {
  this.setState({event: val})
  // console.log(this.state)
}
  render(){
    let event = this.state.event
    return(
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Analytics <Text style={{color:'#49b48c', fontSize: 16, fontWeight:'400'}}> for </Text> React Native</Text>
        </View>
        <View style={styles.eventTypeContainer}>
            <Text style={styles.eventTypeTitle}> Select Event Type </Text>
          <View style={styles.eventTypeButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress('Identify')}
            >
              <Text style={styles.buttonTitle}>Identify</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress('Track')}
            >
              <Text style={styles.buttonTitle}>Track</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.eventTypeButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress('Screen')}
            >
              <Text style={styles.buttonTitle}>Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress('Group')}
            >
              <Text style={styles.buttonTitle}>Group</Text>
            </TouchableOpacity>
          </View>
        </View>
        {event === 'Identify'  &&
          <IdentifyEvent />
        }
        {event === 'Track'  &&
          <TrackEvent />
        }
        {event === 'Screen'  &&
          <ScreenEvent />
        }
        {event === 'Group'  &&
          <GroupEvent />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    height:40,
    width: 100,
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
    marginRight: 10
  },
  buttonTitle:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600'
  },
  body:{
    backgroundColor: '#1e1c2b',
    height: 800,
    marginTop: 18,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 35
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
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
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

analytics.setup('1QyC2F9iRWljITHHMr48MEfS3YIyTOXZ', {
  debug: true,
  flushAt: 1,
  using: [firebase, amplitude, appsflyer, braze, mixpanel],
  ios: {
    trackAdvertising: true
  }
  });
  analytics.reset();
  analytics.setIDFA("123-test-idfa-456709");

analytics.screen('first screen');
