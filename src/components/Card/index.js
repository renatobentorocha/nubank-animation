import React from 'react';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Container,
  WrapperSwiper,
  SwiperItem,
  ItemWrapper,
  ItemTitle,
  ItemBody,
  RewardsButton,
  RewardsButtonText,
} from './styles';

export default function Card({
  horizontalShift,
  verticalShift,
  scrollEnabled,
  ...rest
}) {
  const renderCard = () => (
    <Container>
      <SwiperItem>
        <ItemWrapper>
          <AntDesign name="gift" size={25} style={styles.gift} />
          <ItemTitle>Nubank Rewards</ItemTitle>

          <ItemBody>
            Acumule pontos que nunca expiram e troque por passagens aéreas ou
            serviços que você realmente usa.
          </ItemBody>
        </ItemWrapper>
      </SwiperItem>
      <RewardsButton>
        <RewardsButtonText>ATIVE SEU REWARDS</RewardsButtonText>
      </RewardsButton>
    </Container>
  );

  return (
    <WrapperSwiper
      style={{
        right: horizontalShift,
        transform: [{translateY: verticalShift}, {perspective: 1000}],
      }}
      {...rest}>
      {renderCard()}
    </WrapperSwiper>
  );
}

const styles = StyleSheet.create({
  gift: {
    marginBottom: '10%',
  },
});
