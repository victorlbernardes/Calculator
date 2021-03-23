import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';


class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    let buttonSize = parseInt(this.props.buttonSize ? this.props.buttonSize: 1);
    let buttonColor = this.props.buttonColor ? this.props.buttonColor: '#E0E0E0';
    this.styles = StyleSheet.create({
      area: {
        flex: buttonSize,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: buttonColor,
      },
       buttonText: {
        fontSize: 18,
      }
    });
  }

  render() {

     return (
      <TouchableOpacity style={this.styles.area} onPress={this.props.onPress} >
        <Text style={this.styles.buttonText}>{this.props.info}</Text>
      </TouchableOpacity>

    );
  }
}


export default class Timer extends Component {

  constructor(props) {
    super(props);

    this.state = {result: '0'};
    this.clickNumberOperation = this.clickNumberOperation.bind(this);
    this.clean = this.clean.bind(this);
  }

  clickNumberOperation(number) {
    let state = this.state;
    if(state.result == '0') {
      state.result = number;
    } else {
      state.result += number;
    }
    this.setState(state);
  }

  clean() {
    let state = this.state;
    state.result = '0'; 
    this.setState(state);
  }

  equals() {
    let state = this.state;
    state.result = eval(state.result);
    this.setState(state);
  }

  render() {

    return (
      <View style={styles.body}>
        <View style={styles.buttonLine}>
          <Text style={styles.result} >{this.state.result}</Text>
        </View>
        <View style={styles.buttonLine}>
          <Botao buttonSize='3' info='C' buttonColor = '#cccccc' onPress={this.clean}/>
          <Botao info='/' buttonColor = '#FD9536' />
        </View>
        <View style={styles.buttonLine}>
          <Botao info='7' onPress={()=> {this.clickNumberOperation('7')}}/>
          <Botao info='8' onPress={()=> {this.clickNumberOperation('8')}}/>
          <Botao info='9' onPress={()=> {this.clickNumberOperation('9')}}/>
          <Botao info='*' buttonColor = '#FD9536' onPress={()=> {this.clickNumberOperation('*')}}/>
        </View>
        <View style={styles.buttonLine}>
          <Botao info='4' onPress={()=> {this.clickNumberOperation('4')}}/>
          <Botao info='5' onPress={()=> {this.clickNumberOperation('5')}}/>
          <Botao info='6' onPress={()=> {this.clickNumberOperation('6')}}/>
          <Botao info='-' buttonColor = '#FD9536' onPress={()=> {this.clickNumberOperation('-')}}/>
        </View>
        <View style={styles.buttonLine}>
          <Botao info='1' onPress={()=> {this.clickNumberOperation('1')}}/>
          <Botao info='2' onPress={()=> {this.clickNumberOperation('2')}}/>
          <Botao info='3' onPress={()=> {this.clickNumberOperation('3')}}/>
          <Botao info='+' buttonColor = '#FD9536'onPress={()=> {this.clickNumberOperation('+')}}/>
        </View>
        <View style={styles.buttonLine}>
          <Botao info='0' buttonSize='2' onPress={()=> {this.clickNumberOperation(0)}}/>
          <Botao info='.' onPress={()=> {this.clickNumberOperation('.')}}/>
          <Botao info='=' buttonColor = '#FD9536' onPress={()=> {this.equals('=')}}/>
        </View>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
  },
  buttonLine :{
    flex: 1,
    flexDirection: 'row'
  },
  result: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 50,
    flex: 1,
    textAlign: 'right',
  }

});