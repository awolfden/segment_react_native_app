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

export default class GroupEvent extends React.Component{
  constructor(props){
    super(props);

    this.state={
      trait: 'Trait',
      value: 'Value',
      traits: {},
      groupId: 'groupId'
    }
  }

onChangeGroupId = (val) => {
  this.setState({groupId: val})
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

onSubmitEditingGroupId = (val) => {
  this.setState({groupId: val})
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
  let traits = this.state.traits
  let groupId = this.state.groupId

  await analytics.group(groupId, traits)
  await analytics.flush()
}

onPress = async() => {
  const traitName = this.state.trait
  const value = this.state.value
  let traitsObj =  {...this.state.traits, [traitName]:value}
  await this.setState({traits: traitsObj})
  console.log(this.state)
  await this.setState({trait: 'Trait', value:'Value'})
}

  render(){
    let traits = JSON.stringify(this.state.traits)
    return(
      <View style={styles.trackBody}>
        <Text style={{color: '#49b48c',  fontSize:16, fontWeight:'800'}}>Group Event</Text>
        <View style={styles.eventData}>
          <TextInput
            style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, backgroundColor:'#fff', marginTop:5, paddingLeft:10, color: '#49b48c', marginRight: 20 }}
            onChangeText={text => this.onChangeGroupId(text)}
            value={this.state.groupId}
            onSubmitEditing={text => this.onSubmitEditingGroupId(text)}
            onFocus={ () => this.setState({groupId:''})}
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
        <ScrollView style={styles.traitContainer}>
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


analytics.track('test',{
  property1: true,
  property2: 'string',
  property3: 679503
},
{
  context:{page: {url:'my new url', title: 'my new title', referrer: 'my new referrer'}}
})
