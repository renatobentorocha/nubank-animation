import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const WrapperSwiper = styled(Animated.View)`
  position: absolute;
  z-index: 10;
  top: 20%;
  width: 100%;
  height: 60%;
  background-color: transparent;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin: 0 20px;
  padding: 0 10%;
`;

export const SwiperItem = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const ItemWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 10%;
`;

export const ItemTitle = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 21px;
  margin-bottom: 3%;
`;

export const ItemBody = styled.Text`
  color: #000;
  text-align: center;
`;

export const RewardsButton = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid #ba68c8;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  margin-bottom: 20px;
`;

export const RewardsButtonText = styled.Text`
  color: #8d3dc8;
  font-weight: bold;
  font-size: 14px;
`;
