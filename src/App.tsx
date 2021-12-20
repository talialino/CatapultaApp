import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Header from './components/Header';

// import { Container } from './styles';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Talia');
  const [title, setTitle] = useState<string>('Olá!');

  /**
   * Effect -> Renderiza o que ta dentro dele toda vez que a página for carregada
   *        -> No return ele dispara depois que tudo é rodado
   */

  useEffect(() => {
    console.log('mounting');
    if (name === 'Talia') {
      setTitle('Hello!');
    } else {
      setTitle('Olá!');
    }

    // return Alert.alert("OOPS", "Componente unomonetd");
  }, [name]);

  /**
   * Callbacks -> Mantem as funtions na memória para não renderizar ou mudar quando a página for recarregada
   *           -> Nesse caso, o nome precisou ficar sendo ouvido, já que ele precisava mudar
   *              (se não, o nome só iria mudar uma vez e depois não mudar mais)
   */
  const headerPress = useCallback(() => {
    if (name === 'Talia') {
      setName('Linda');
    } else {
      setName('Talia');
    }
  }, [name]);

  /**
   * Memos -> Mantém o mesmo valor na memória pra não mudar quando a tela for renderizada
   *       -> Precisa por a variável que for mudar pra ser assistida também, se não vira uma constante
   *       -> É utilizado por exemplo pra datas, por não precisa recarregar toda vez que a página for renderizada
   */

  const nameChanged = useMemo(() => {
    // return value
    return `${name} | ${new Date()}`;
  }, [name]);

  /**
   * Refs -> Referencia o valor de um campo, normalmente input, a uma variável
   *      -> Você pode usar inputRef.current.focus() pra selecionar o input, o blur() tira o foco
   */

  const inputRef = useRef<TextInput>({} as TextInput);

  return (
    <>
      <SafeAreaView style={style.App}>
        <Header title={title} name={name} />
        <Button title="Clique me" onPress={headerPress}></Button>
      </SafeAreaView>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
  },
});
