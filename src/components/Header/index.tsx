import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <View>
      <Image style={style.logo} source={require('./../../assets/light.jpg')} />
      <View style={style.Button}>
        <Text style={style.Text}>BEGIN</Text>
      </View>
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
  Button: {
    backgroundColor: '#086A87',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '9%',
    borderRadius: 10,
    position: 'absolute',
    top: '60%',
  },
  Text: {
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

