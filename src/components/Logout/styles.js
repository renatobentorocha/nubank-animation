import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled(Animated.View)`
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid #ba68c8;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  margin-top: 25px;
`;

export const LogoutText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
