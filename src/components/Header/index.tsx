import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import {Props} from './types';

const Header = (props : Props) => {
  return (
    <View style={style.Container}>
      {/* <Image style={style.logo} source={require('./../../assets/light.jpg')} /> */}
      <Text style={style.Title}>{props.title}</Text>
      <View style={style.Button}>
        <Text style={style.Name}>{props.name}</Text>
      </View>
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
  Container: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  Button: {
    backgroundColor: '#086A87',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '60%',
    height: '30%',
    borderRadius: 10,
    top: '30%',
  },
  Title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    top: '25%'
  },
  Name: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});

