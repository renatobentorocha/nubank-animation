import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {BottomButton, Text} from './styles';

export default function BottomButtons() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <BottomButton style={styles.marginLeftZero}>
        <MaterialCommunityIcons name="account" color="#fff" size={26} />
        <Text>Indicar amigos</Text>
      </BottomButton>
      <BottomButton>
        <Feather name="smartphone" color="#fff" size={26} />
        <Text>Recarga de celular</Text>
      </BottomButton>
      <BottomButton style={{}}>
        <MaterialIcons name="monetization-on" color="#fff" size={26} />
        <Text>Cobrar</Text>
      </BottomButton>
      <BottomButton>
        <MaterialIcons name="monetization-on" color="#fff" size={26} />
        <Text>Depositar</Text>
      </BottomButton>
      <BottomButton>
        <MaterialIcons name="monetization-on" color="#fff" size={26} />
        <Text>Transferir</Text>
      </BottomButton>
      <BottomButton>
        <MaterialIcons name="monetization-on" color="#fff" size={26} />
        <Text>Ajustar limite</Text>
      </BottomButton>
      <BottomButton>
        <MaterialCommunityIcons
          name="help-circle-outline"
          color="#fff"
          size={26}
        />
        <Text>Me ajuda</Text>
      </BottomButton>
      <BottomButton>
        <MaterialIcons name="monetization-on" color="#fff" size={26} />
        <Text>Pagar</Text>
      </BottomButton>
      <BottomButton>
        <MaterialIcons name="monetization-on" color="#fff" size={26} />
        <Text>Bloquear cartão</Text>
      </BottomButton>
      <BottomButton>
        <MaterialIcons name="monetization-on" color="#fff" size={26} />
        <Text>Cartão virtual</Text>
      </BottomButton>
      <BottomButton>
        <MaterialIcons name="monetization-on" color="#fff" size={26} />
        <Text>Organizar atalhos</Text>
      </BottomButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  marginLeftZero: {
    marginLeft: 0,
  },
});
