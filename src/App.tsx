import React, {useState, useEffect} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';

// import { Container } from './styles';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Talia');
  const [title, setTitle] = useState<string>('Olá!');

  /**
   * Callbacks
   */
  const headerPress = () => {
    setName(old => {
      if (old === 'Talia') {
        return 'Linda';
      } else {
        return 'Talia';
      }
    });
  };

  /**
   * Effect -> no return ele dispara depois que tudo é rodado
   */

  useEffect(() => {
    console.log("mounting");
    if(name === "Talia"){
      setTitle("Hello!");
    }else{
      setTitle("Olá!");
    }

    // return Alert.alert("OOPS", "Componente unomonetd");
  }, [name]);

  return (
    <SafeAreaView style={style.App}>
      <Header title={title} name={name} />
      <Button title="Clique me" onPress={headerPress}></Button>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
  },
});
