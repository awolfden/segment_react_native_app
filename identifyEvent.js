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



export default class IdentifyEvent extends React.Component{
  constructor(props){
    super(props);

    this.state={
      userId:'userId',
      trait: 'Trait',
      value: 'Value',
      traits: {}
    }
  }

getUserContext = async () => {
  let userContext = await analytics.userContext;
  return userContext;
}

onChangeUserId = (val) => {
  this.setState({userId: val})
  console.log(this.state)
}

onChangeTrait = (val) => {
  this.setState({trait: val})
  console.log(this.state)
}

onChangeValue = (val) => {
  this.setState({value: val})
  console.log(this.state)
}

onSubmitEditinguserId = (val) => {
  this.setState({userId: val})
  console.log(this.state)
}

onSubmitEditingTrait = (val) => {
  this.setState({Trait: val})
  console.log(this.state)
}

onSubmitEditingValue = (val) => {
  this.setState({value: val})
  console.log(this.state)
}

onSendEvent = async() => {
  let userId = this.state.userId
  let traits = this.state.traits
  

  await analytics.identify("test-user-js3ft7", {
    "trait0": 1,
    "trait1": true, 
    "trait2": "false",
    "trait3": false,
    "trait10": true
    }
  );
  // await console.log('user:', analytics.getAnonymousId());

  
  await analytics.flush();
};

onPress = async() => {
  const traitName = this.state.trait
  const value = this.state.value
  let traitsObj =  {...this.state.traits, [traitName]:value}
  await this.setState({traits: traitsObj})
  // console.log(this.state)
  await this.setState({trait: 'Trait', value:'Value'})
}

  render(){
    let traits = JSON.stringify(this.state.traits)
    return(
      <View style={styles.trackBody}>
        <Text style={{color: '#49b48c',  fontSize:16, fontWeight:'800'}}>Identify Event</Text>
        <View style={styles.eventData}>
          <TextInput
            style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, backgroundColor:'#fff', marginTop:5, paddingLeft:10, color: '#49b48c', marginRight: 20 }}
            onChangeText={text => this.onChangeUserId(text)}
            value={this.state.userId}
            onSubmitEditing={text => this.onSubmitEditinguserId(text)}
            onFocus={ () => this.setState({userId:''})}
          />
        </View>
        <View style={styles.eventProps}>
          <TextInput
            style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1, backgroundColor:'#fff', marginTop:5, paddingLeft:10, color: '#49b48c' }}
            onChangeText={text => this.onChangeTrait(text)}
            value={this.state.trait}
            onSubmitEditing={text => this.onSubmitEditingTrait(text)}
            onFocus={ () => this.setState({trait:''})}
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
          <Text style={styles.buttonTitle}>Add Trait</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onSendEvent()}
        >
          <Text style={styles.buttonTitle}>Send Event</Text>
        </TouchableOpacity>
        <ScrollView>
          <Text style={styles.traitText}>Current Traits:</Text>
          <Text style={styles.traitText}>{traits}</Text>
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
