import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {
  AccountWrapper,
  BankInformations,
  BankTextWrapper,
  BankText,
  BankBoldText,
  OptionsWrapper,
  Option,
  OptionTextWrapper,
  OptionText,
  WraperFlexDirectionColumn,
  OptionMicroCopy,
} from './styles';

const QrCode = props => {
  return (
    <Svg
      style={{backgroundColor: '#fff'}}
      fill="#88269e"
      width={100}
      height={100}
      viewBox="15 15 340 340"
      {...props}>
      <Path d="M40 40h10v10H40zM50 40h10v10H50zM60 40h10v10H60zM70 40h10v10H70zM80 40h10v10H80zM90 40h10v10H90zM100 40h10v10h-10zM120 40h10v10h-10zM130 40h10v10h-10zM140 40h10v10h-10zM160 40h10v10h-10zM190 40h10v10h-10zM200 40h10v10h-10zM210 40h10v10h-10zM220 40h10v10h-10zM230 40h10v10h-10zM240 40h10v10h-10zM260 40h10v10h-10zM270 40h10v10h-10zM280 40h10v10h-10zM290 40h10v10h-10zM300 40h10v10h-10zM310 40h10v10h-10zM320 40h10v10h-10zM40 50h10v10H40zM100 50h10v10h-10zM120 50h10v10h-10zM130 50h10v10h-10zM140 50h10v10h-10zM150 50h10v10h-10zM160 50h10v10h-10zM180 50h10v10h-10zM190 50h10v10h-10zM210 50h10v10h-10zM260 50h10v10h-10zM320 50h10v10h-10zM40 60h10v10H40zM60 60h10v10H60zM70 60h10v10H70zM80 60h10v10H80zM100 60h10v10h-10zM170 60h10v10h-10zM180 60h10v10h-10zM190 60h10v10h-10zM220 60h10v10h-10zM240 60h10v10h-10zM260 60h10v10h-10zM280 60h10v10h-10zM290 60h10v10h-10zM300 60h10v10h-10zM320 60h10v10h-10zM40 70h10v10H40zM60 70h10v10H60zM70 70h10v10H70zM80 70h10v10H80zM100 70h10v10h-10zM120 70h10v10h-10zM140 70h10v10h-10zM150 70h10v10h-10zM210 70h10v10h-10zM240 70h10v10h-10zM260 70h10v10h-10zM280 70h10v10h-10zM290 70h10v10h-10zM300 70h10v10h-10zM320 70h10v10h-10zM40 80h10v10H40zM60 80h10v10H60zM70 80h10v10H70zM80 80h10v10H80zM100 80h10v10h-10zM140 80h10v10h-10zM160 80h10v10h-10zM170 80h10v10h-10zM230 80h10v10h-10zM260 80h10v10h-10zM280 80h10v10h-10zM290 80h10v10h-10zM300 80h10v10h-10zM320 80h10v10h-10zM40 90h10v10H40zM100 90h10v10h-10zM130 90h10v10h-10zM150 90h10v10h-10zM160 90h10v10h-10zM180 90h10v10h-10zM210 90h10v10h-10zM230 90h10v10h-10zM260 90h10v10h-10zM320 90h10v10h-10zM40 100h10v10H40zM50 100h10v10H50zM60 100h10v10H60zM70 100h10v10H70zM80 100h10v10H80zM90 100h10v10H90zM100 100h10v10h-10zM120 100h10v10h-10zM140 100h10v10h-10zM160 100h10v10h-10zM180 100h10v10h-10zM200 100h10v10h-10zM220 100h10v10h-10zM240 100h10v10h-10zM260 100h10v10h-10zM270 100h10v10h-10zM280 100h10v10h-10zM290 100h10v10h-10zM300 100h10v10h-10zM310 100h10v10h-10zM320 100h10v10h-10zM120 110h10v10h-10zM150 110h10v10h-10zM160 110h10v10h-10zM170 110h10v10h-10zM180 110h10v10h-10zM190 110h10v10h-10zM200 110h10v10h-10zM210 110h10v10h-10zM220 110h10v10h-10zM230 110h10v10h-10zM40 120h10v10H40zM60 120h10v10H60zM70 120h10v10H70zM90 120h10v10H90zM100 120h10v10h-10zM110 120h10v10h-10zM130 120h10v10h-10zM150 120h10v10h-10zM170 120h10v10h-10zM180 120h10v10h-10zM190 120h10v10h-10zM200 120h10v10h-10zM210 120h10v10h-10zM220 120h10v10h-10zM260 120h10v10h-10zM290 120h10v10h-10zM310 120h10v10h-10zM320 120h10v10h-10zM70 130h10v10H70zM80 130h10v10H80zM160 130h10v10h-10zM210 130h10v10h-10zM220 130h10v10h-10zM230 130h10v10h-10zM250 130h10v10h-10zM260 130h10v10h-10zM270 130h10v10h-10zM280 130h10v10h-10zM320 130h10v10h-10zM80 140h10v10H80zM100 140h10v10h-10zM110 140h10v10h-10zM150 140h10v10h-10zM180 140h10v10h-10zM200 140h10v10h-10zM210 140h10v10h-10zM300 140h10v10h-10zM310 140h10v10h-10zM40 150h10v10H40zM50 150h10v10H50zM60 150h10v10H60zM70 150h10v10H70zM80 150h10v10H80zM90 150h10v10H90zM110 150h10v10h-10zM120 150h10v10h-10zM150 150h10v10h-10zM160 150h10v10h-10zM170 150h10v10h-10zM180 150h10v10h-10zM190 150h10v10h-10zM220 150h10v10h-10zM240 150h10v10h-10zM250 150h10v10h-10zM260 150h10v10h-10zM270 150h10v10h-10zM280 150h10v10h-10zM290 150h10v10h-10zM320 150h10v10h-10zM50 160h10v10H50zM70 160h10v10H70zM80 160h10v10H80zM90 160h10v10H90zM100 160h10v10h-10zM120 160h10v10h-10zM140 160h10v10h-10zM160 160h10v10h-10zM190 160h10v10h-10zM210 160h10v10h-10zM240 160h10v10h-10zM290 160h10v10h-10zM300 160h10v10h-10zM40 170h10v10H40zM50 170h10v10H50zM60 170h10v10H60zM70 170h10v10H70zM80 170h10v10H80zM110 170h10v10h-10zM120 170h10v10h-10zM130 170h10v10h-10zM140 170h10v10h-10zM170 170h10v10h-10zM190 170h10v10h-10zM200 170h10v10h-10zM230 170h10v10h-10zM240 170h10v10h-10zM260 170h10v10h-10zM310 170h10v10h-10zM320 170h10v10h-10zM50 180h10v10H50zM70 180h10v10H70zM80 180h10v10H80zM100 180h10v10h-10zM110 180h10v10h-10zM120 180h10v10h-10zM130 180h10v10h-10zM140 180h10v10h-10zM180 180h10v10h-10zM200 180h10v10h-10zM220 180h10v10h-10zM230 180h10v10h-10zM250 180h10v10h-10zM270 180h10v10h-10zM290 180h10v10h-10zM300 180h10v10h-10zM310 180h10v10h-10zM320 180h10v10h-10zM40 190h10v10H40zM60 190h10v10H60zM70 190h10v10H70zM130 190h10v10h-10zM140 190h10v10h-10zM150 190h10v10h-10zM170 190h10v10h-10zM250 190h10v10h-10zM260 190h10v10h-10zM310 190h10v10h-10zM40 200h10v10H40zM60 200h10v10H60zM100 200h10v10h-10zM110 200h10v10h-10zM120 200h10v10h-10zM160 200h10v10h-10zM200 200h10v10h-10zM220 200h10v10h-10zM250 200h10v10h-10zM270 200h10v10h-10zM280 200h10v10h-10zM310 200h10v10h-10zM60 210h10v10H60zM70 210h10v10H70zM90 210h10v10H90zM120 210h10v10h-10zM140 210h10v10h-10zM150 210h10v10h-10zM160 210h10v10h-10zM170 210h10v10h-10zM190 210h10v10h-10zM270 210h10v10h-10zM300 210h10v10h-10zM310 210h10v10h-10zM50 220h10v10H50zM60 220h10v10H60zM80 220h10v10H80zM90 220h10v10H90zM100 220h10v10h-10zM120 220h10v10h-10zM130 220h10v10h-10zM150 220h10v10h-10zM190 220h10v10h-10zM200 220h10v10h-10zM250 220h10v10h-10zM260 220h10v10h-10zM270 220h10v10h-10zM290 220h10v10h-10zM300 220h10v10h-10zM40 230h10v10H40zM50 230h10v10H50zM60 230h10v10H60zM70 230h10v10H70zM90 230h10v10H90zM110 230h10v10h-10zM140 230h10v10h-10zM190 230h10v10h-10zM200 230h10v10h-10zM210 230h10v10h-10zM220 230h10v10h-10zM240 230h10v10h-10zM250 230h10v10h-10zM270 230h10v10h-10zM280 230h10v10h-10zM300 230h10v10h-10zM40 240h10v10H40zM60 240h10v10H60zM90 240h10v10H90zM100 240h10v10h-10zM110 240h10v10h-10zM120 240h10v10h-10zM160 240h10v10h-10zM170 240h10v10h-10zM190 240h10v10h-10zM200 240h10v10h-10zM210 240h10v10h-10zM220 240h10v10h-10zM230 240h10v10h-10zM240 240h10v10h-10zM250 240h10v10h-10zM260 240h10v10h-10zM270 240h10v10h-10zM280 240h10v10h-10zM290 240h10v10h-10zM300 240h10v10h-10zM120 250h10v10h-10zM130 250h10v10h-10zM140 250h10v10h-10zM150 250h10v10h-10zM170 250h10v10h-10zM180 250h10v10h-10zM200 250h10v10h-10zM220 250h10v10h-10zM230 250h10v10h-10zM240 250h10v10h-10zM280 250h10v10h-10zM290 250h10v10h-10zM300 250h10v10h-10zM310 250h10v10h-10zM320 250h10v10h-10zM40 260h10v10H40zM50 260h10v10H50zM60 260h10v10H60zM70 260h10v10H70zM80 260h10v10H80zM90 260h10v10H90zM100 260h10v10h-10zM120 260h10v10h-10zM140 260h10v10h-10zM150 260h10v10h-10zM170 260h10v10h-10zM210 260h10v10h-10zM220 260h10v10h-10zM230 260h10v10h-10zM240 260h10v10h-10zM260 260h10v10h-10zM280 260h10v10h-10zM290 260h10v10h-10zM310 260h10v10h-10zM40 270h10v10H40zM100 270h10v10h-10zM120 270h10v10h-10zM130 270h10v10h-10zM140 270h10v10h-10zM160 270h10v10h-10zM190 270h10v10h-10zM230 270h10v10h-10zM240 270h10v10h-10zM280 270h10v10h-10zM310 270h10v10h-10zM40 280h10v10H40zM60 280h10v10H60zM70 280h10v10H70zM80 280h10v10H80zM100 280h10v10h-10zM130 280h10v10h-10zM140 280h10v10h-10zM150 280h10v10h-10zM160 280h10v10h-10zM180 280h10v10h-10zM210 280h10v10h-10zM240 280h10v10h-10zM250 280h10v10h-10zM260 280h10v10h-10zM270 280h10v10h-10zM280 280h10v10h-10zM290 280h10v10h-10zM300 280h10v10h-10zM310 280h10v10h-10zM40 290h10v10H40zM60 290h10v10H60zM70 290h10v10H70zM80 290h10v10H80zM100 290h10v10h-10zM120 290h10v10h-10zM130 290h10v10h-10zM180 290h10v10h-10zM190 290h10v10h-10zM250 290h10v10h-10zM270 290h10v10h-10zM280 290h10v10h-10zM290 290h10v10h-10zM300 290h10v10h-10zM320 290h10v10h-10zM40 300h10v10H40zM60 300h10v10H60zM70 300h10v10H70zM80 300h10v10H80zM100 300h10v10h-10zM120 300h10v10h-10zM130 300h10v10h-10zM150 300h10v10h-10zM170 300h10v10h-10zM230 300h10v10h-10zM270 300h10v10h-10zM300 300h10v10h-10zM320 300h10v10h-10zM40 310h10v10H40zM100 310h10v10h-10zM130 310h10v10h-10zM140 310h10v10h-10zM150 310h10v10h-10zM160 310h10v10h-10zM190 310h10v10h-10zM230 310h10v10h-10zM240 310h10v10h-10zM250 310h10v10h-10zM270 310h10v10h-10zM280 310h10v10h-10zM290 310h10v10h-10zM310 310h10v10h-10zM40 320h10v10H40zM50 320h10v10H50zM60 320h10v10H60zM70 320h10v10H70zM80 320h10v10H80zM90 320h10v10H90zM100 320h10v10h-10zM120 320h10v10h-10zM130 320h10v10h-10zM140 320h10v10h-10zM160 320h10v10h-10zM220 320h10v10h-10zM240 320h10v10h-10zM250 320h10v10h-10zM270 320h10v10h-10zM280 320h10v10h-10zM310 320h10v10h-10z" />
    </Svg>
  );
};

export default function Account({opacity}) {
  return (
    <Animated.ScrollView style={[styles.paddingSides, {opacity}]}>
      <AccountWrapper>
        <QrCode />
        <BankInformations>
          <BankTextWrapper>
            <BankText>Banco </BankText>
            <BankBoldText>260 - Nu Pagamentos S.A.</BankBoldText>
          </BankTextWrapper>
          <BankTextWrapper>
            <BankText>Agência </BankText>
            <BankBoldText>0000</BankBoldText>
          </BankTextWrapper>
          <BankTextWrapper>
            <BankText>Conta </BankText>
            <BankBoldText>00000000-0</BankBoldText>
          </BankTextWrapper>
        </BankInformations>
      </AccountWrapper>
      <OptionsWrapper>
        <Option style={styles.optionBorderTop}>
          <OptionTextWrapper>
            <MaterialCommunityIcons
              name="help-circle-outline"
              color="#fff"
              size={26}
            />
            <OptionText>Me ajuda</OptionText>
          </OptionTextWrapper>
          <MaterialIcons name="chevron-right" color="#fff" size={26} />
        </Option>
        <Option style={styles.optionBorderTop}>
          <OptionTextWrapper>
            <AntDesign name="creditcard" color="#fff" size={26} />
            <OptionText>Pedir função débito</OptionText>
          </OptionTextWrapper>
          <MaterialIcons name="chevron-right" color="#fff" size={26} />
        </Option>
        <Option style={styles.optionBorderTop}>
          <OptionTextWrapper>
            <MaterialCommunityIcons name="account" color="#fff" size={26} />
            <WraperFlexDirectionColumn>
              <OptionText>Perfil</OptionText>
              <OptionMicroCopy>
                Nome de prefeência, telefone, e-mail
              </OptionMicroCopy>
            </WraperFlexDirectionColumn>
          </OptionTextWrapper>
          <MaterialIcons name="chevron-right" color="#fff" size={26} />
        </Option>
        <Option style={styles.optionBorderTop}>
          <OptionTextWrapper>
            <MaterialIcons name="monetization-on" color="#fff" size={26} />
            <OptionText>Configurar conta</OptionText>
          </OptionTextWrapper>
          <MaterialIcons name="chevron-right" color="#fff" size={26} />
        </Option>
        <Option style={[styles.optionBorderTop]}>
          <OptionTextWrapper>
            <AntDesign name="creditcard" color="#fff" size={26} />
            <OptionText>Configurar cartão</OptionText>
          </OptionTextWrapper>
          <MaterialIcons name="chevron-right" color="#fff" size={26} />
        </Option>
        <Option style={[styles.optionBorderTop]}>
          <OptionTextWrapper>
            <MaterialCommunityIcons
              name="home-account"
              color="#fff"
              size={26}
            />
            <OptionText>Pedir conta PJ</OptionText>
          </OptionTextWrapper>
          <MaterialIcons name="chevron-right" color="#fff" size={26} />
        </Option>
        <Option style={[styles.optionBorderTop, styles.optionBorderBottom]}>
          <OptionTextWrapper>
            <Feather name="smartphone" color="#fff" size={26} />
            <OptionText>Configuração do app</OptionText>
          </OptionTextWrapper>
          <MaterialIcons name="chevron-right" color="#fff" size={26} />
        </Option>
      </OptionsWrapper>
    </Animated.ScrollView>
  );
}

const BORDER_OPTION_WIDTH = 1;
const BORDER_OPTION_COLOR = '#ba68c8';

const styles = StyleSheet.create({
  optionBorderTop: {
    borderTopWidth: BORDER_OPTION_WIDTH,
    borderTopColor: BORDER_OPTION_COLOR,
  },
  optionBorderBottom: {
    borderBottomWidth: BORDER_OPTION_WIDTH,
    borderBottomColor: BORDER_OPTION_COLOR,
  },
  marginZero: {
    marginLeft: 0,
  },
  paddingSides: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  marginSides: {
    marginLeft: 20,
    marginRight: 20,
  },
  paginationStyle: {
    bottom: -23,
    left: null,
    right: '50%',
  },
});
