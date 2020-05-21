import React, {useRef, useEffect} from 'react';
import {StatusBar, Dimensions, Animated, PanResponder} from 'react-native';

import './utils/loadIcons';

import Header from './components/Header';
import Menu from './components/Menu';
import Card from './components/Card';
import BottomButtons from './components/BottomButtons';
import Logout from './components/Logout';

import {SafeArearView, Container} from './styles';

const {width, height} = Dimensions.get('screen');
const MAX_SLIDE = Math.floor(height * 0.623);
const MIDDLE_SLIDE = Math.floor(height * 0.33);
const MAX_OFFSET_DOWN = Math.floor(height * 0.15);
const MAX_OFFSET_UP = Math.floor(height * 0.535);

export default function App() {
  let offSet = 0;
  let down = true;

  const bottomButtonsAnimated = useRef(new Animated.Value(-width)).current;
  const cardAnimatedValueY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(bottomButtonsAnimated, {
      toValue: 0,
      speed: 5,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {},

      onPanResponderMove: (evt, gestureState) => {
        const canSetValue =
          (down && gestureState.dy >= 0) || (!down && gestureState.dy <= 0);

        if (canSetValue) {
          cardAnimatedValueY.setValue(gestureState.dy);
        }
      },

      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderRelease: (evt, gestureState) => {
        const canSetValue =
          (down && gestureState.dy >= 0) || (!down && gestureState.dy <= 0);

        if (canSetValue) {
          offSet += gestureState.dy;
          cardAnimatedValueY.setOffset(offSet);
          cardAnimatedValueY.setValue(0);
        }

        const restOffSet = MAX_SLIDE - offSet;

        if (down && offSet >= MAX_OFFSET_DOWN) {
          Animated.timing(cardAnimatedValueY, {
            toValue: restOffSet,
            duration: 500,
          }).start(() => {
            cardAnimatedValueY.setOffset(MAX_SLIDE);
            cardAnimatedValueY.setValue(0);
            offSet = MAX_SLIDE;
            down = !down;
          });
        } else if (!down && offSet <= MAX_OFFSET_UP) {
          Animated.timing(cardAnimatedValueY, {
            toValue: restOffSet - MAX_SLIDE,
            duration: 500,
          }).start(() => {
            cardAnimatedValueY.setOffset(0);
            cardAnimatedValueY.setValue(0);
            offSet = 0;
            down = !down;
          });
        }
      },

      onPanResponderTerminate: (evt, gestureState) => {},
      onShouldBlockNativeResponder: (evt, gestureState) => true,
    }),
  ).current;

  const opacity = cardAnimatedValueY.interpolate({
    inputRange: [0, MIDDLE_SLIDE, MAX_SLIDE],
    outputRange: [0, 0.3, 1],
    extrapolate: 'clamp',
  });

  const opacityBottomButtons = cardAnimatedValueY.interpolate({
    inputRange: [0, MIDDLE_SLIDE, MAX_SLIDE],
    outputRange: [1, 0.6, 0],
    extrapolate: 'clamp',
  });

  return (
    <SafeArearView>
      <StatusBar barStyle="light-content" backgroundColor="#88269e" />
      <Container>
        <Header />
        <Menu opacity={opacity} />
        <Logout opacity={opacity} />
      </Container>
      <Card
        horizontalShift={bottomButtonsAnimated}
        verticalShift={cardAnimatedValueY}
        {...panResponder.panHandlers}
      />
      <Animated.View
        style={{
          right: bottomButtonsAnimated,
          opacity: opacityBottomButtons,
        }}>
        <BottomButtons />
      </Animated.View>
    </SafeArearView>
  );
}
