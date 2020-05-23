# React Native Animations - A Nubank Example

According to [statista](https://www.statista.com/statistics/330695/number-of-smartphone-users-worldwide/), today, the number of smartphone users surpasses the number of three billions. So in the last years, we have seen an increasing number of applications for mobile devices being developed.

This application can be seen in many areas, like: music (Spotify), travel (Tripadvisor, Uber) and social network (Facebook, Instagram). When we are using some of this apps or another one, our experience improves as the application provides smoother transitions and interactions.

Thus in this post we will see an introduction of how to uses the React Native Animation library for improves the user experience in application and we will uses the Nubank interface as example.

![](https://i.ibb.co/gmSmW37/Complete.gif)

## Animation library basics

The React Native Animated library provide us two types of values tha we can use to animate our components:

- Animated.Value
- Animated.ValueXY

Since we have one of this values or both, we can trigger them with our component and use some function, provided by React Native, to drive the animation:

- Animated.spring() -> provides a basic spring physics model.
- Animated.timing() -> animates a value over time.

Example:

```jsx
const value = new Animated.Value(0);

Animated.spring(value, {
  toValue: 0,
  speed: 5,
}).start();

Animated.timing(value, {
  toValue: 300,
  duration: 500,
}).start();
```

In the rest of this post we will use this Animated values and functions to animate our app example.

## Horizontal animation

As we can see, when the app initialise, the first animation that occur is a horizontal moving of card and bottom buttons. Bellow we have the code and image app without any animation:

![](https://i.ibb.co/JRmJJ7r/First-Static-Code.png)

So our first step will be create a horizontal animation for the card and bottom buttons after the app has ben initialized.

React Native provide us some animatable components and only this can be animated. So to animate bottom buttons we need change the `View` that wrapper the `BottomButtons Component` by an `Animated.View`:

```jsx
<View>
  <BottomButtons />
</View>;

to;

import {Animated} from 'react-native';
<Animated.View>
  <BottomButtons />
</Animated.View>;
```

and we need create a `Animated Value` that will be used toghether the `Animated Component` previously created:

```jsx
import React, {useRef, useEffect} from 'react';
import {Dimensions, Animated} from 'react-native';

const {width} = Dimensions.get('screen');
const bottomButtonsAnimated = useRef(new Animated.Value(-width)).current;

<Animated.View
  style={{
    right: bottomButtonsAnimated,
  }}>
  <BottomButtons />
</Animated.View>;
```

In the above code we get the screen width to initialy put our bottom buttons component outside the screen and after animate it go back to screen. We also saw the `useRef`, whitout it every rerender will reset the `bottomButtonsAnimated` to the initial value.

So at this time we have an Animated Value (`bottomButtonsAnimated`) to be used with the `<Animated.View />` that wrapper the `<BottomButtons />` component. However we still need animate this value and it can be do using `Animated.spring()`:

```jsx
useEffect(() => {
  Animated.spring(bottomButtonsAnimated, {
    toValue: 0,
    speed: 5,
  }).start();
}, []);
```

When the `Animated.spring` initialise it will increment the bottomButtonsAnimated from `-width` to `zero`. As the `<Card />` component has the same animation, we can use the `bottomButtonsAnimated` to animate it also:

```jsx
<Card horizontalShift={bottomButtonsAnimated} />
```

and we will get the first animations:

![](https://i.ibb.co/Swx1Qf0/Horizontal.gif)

## Vertical animation

Now, as the first gif, our aim is create the vertical animations and for it we will use the [PanResponder](https://reactnative.dev/docs/panresponder), once the PanResponder works with Animated API to build gestures in the UI.

The PanResponder provide us a `create method`that accept as parameter an config object with [all responder callbacks](https://reactnative.dev/docs/panresponder#usage-pattern). Each one callback receive as parameter a native event:

```text
  changedTouches: Array of all touch events that have changed since the last event
  identifier: The ID of the touch
  locationX: The X position of the touch, relative to the element
  locationY: The Y position of the touch, relative to the element
  pageX: The X position of the touch, relative to the root element
  pageY: The Y position of the touch, relative to the root element
  target: The node id of the element receiving the touch event
  timestamp: A time identifier for the touch, useful for velocity calculation
  touches: Array of all current touches on the screen
```

and gestureState object:

```text
  stateID: ID of the gestureState, persisted as long as there at least one touch on screen
  moveX: the latest screen coordinates of the recently-moved touch
  moveY: the latest screen coordinates of the recently-moved touch
  x0: the screen coordinates of the responder grant
  y0: the screen coordinates of the responder grant
  dx: accumulated distance of the gesture since the touch started
  dy: accumulated distance of the gesture since the touch started
  vx: current velocity of the gesture
  vy: current velocity of the gesture
  numberActiveTouches - Number of touches currently on screen
```

With the above information, as the first step, we must create a Animated Value to vertical moving:

```jsx
const cardAnimatedValueY = useRef(new Animated.Value(0)).current;
```

and pass this value as parameter to Card component:

```jsx
<Card
  horizontalShift={bottomButtonsAnimated}
  verticalShift={cardAnimatedValueY}
/>
```

Once we have the Animated Value to vertical moving, we can use the PanResponder to recognize the gestures:

```jsx
import {StatusBar, Dimensions, Animated, PanResponder} from 'react-native';

const panResponder = React.useRef(
  PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {},

    onPanResponderMove: (evt, gestureState) => {
      cardAnimatedValueY.setValue(gestureState.dy);
    },

    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {},
    onPanResponderTerminate: (evt, gestureState) => {},
    onShouldBlockNativeResponder: (evt, gestureState) => true,
  }),
).current;
```

In the above code we use the `onPanResponderMove` to set the `cardAnimatedValueY` and we need to pass the PanResponder callbacks to Card component:

```jsx
<Card
  horizontalShift={bottomButtonsAnimated}
  verticalShift={cardAnimatedValueY}
  {...panResponder.panHandlers}
/>
```

and internally the card component handles the parameters:

```jsx
<WrapperSwiper
  style={{
    right: horizontalShift,
    transform: [{translateY: verticalShift}],
  }}
  {...rest}>
  {renderCard()}
</WrapperSwiper>
```

where the `WrapperSwiper` is a `Animated.View`.

![](https://i.ibb.co/ZX2QCX6/First-Vertical.gif)

The above gif demonstrates the results for vertical the moving, however we still have two issues with it gif:

1 - The opacity related to another components;
2 - When we release the card and touch it again the card position became to the initial.

### Components opacity

When we slide the card, we need change the opacity from another components. So that the menu options under the card need initialise with zero opacity and growth to one as the card slide down. We need also that the `<BottomButtons />` opacity initialise with one opacity and go to zero as the card slide down.

At this point we have creating our animations applying changes to animated variables `cardAnimatedValueY` straightly. However we can obtain another animated values as our animated variables `cardAnimatedValueY` changes, example:

| cardAnimatedValueY | Result |
| ------------------ | ------ |
| 0                  | 0      |
| 1                  | 0.1    |
| 2                  | 0.2    |
| ...                | ...    |
| 415                | 1      |

So to do that and use the result with the opacity of our components we will use the `AnimatedVariable.interpolate` function. It will receive as parameter a configuration object:

```ts
{
    inputRange: number[];
    outputRange: string[] | number[];
    extrapolate?: ExtrapolateType;
}
```

Thus this function will map the inputRange to outputRange and we can use `extrapolate` property to inform what action to take if the inputRange extrapolate the range. In our case we alway want a opacity value between 0 and 1, so we will "clamp" the outputRange in case the extrapolete inputRange occurring.

Now we can make our opacity animations:

```jsx
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const MAX_SLIDE = Math.floor(height * 0.623);
const MIDDLE_SLIDE = Math.floor(height * 0.33);

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
```

the `MAX_SLIDE` value is the distance from the inital card component position to under the button `SAIR DA CONTA`.
Now we will be apply the `opacity` variable to:

```jsx
<Menu opacity={opacity} />
<Logout opacity={opacity} />
```

and the `opacityBottomButtons` to:

```jsx
<BottomButtons opacity={opacityBottomButtons} />
```

![](https://i.ibb.co/Rvc3Gp2/opacity.gif)

### Fix card position after release and touch again

If we put a `console.log` statement inside the `onPanResponderMove` method and print the `gestureState.dy` value, we can see that the variable that contain the vertical displacement became zero always that we release the card and touch again.

![](https://i.ibb.co/Sw8gzD6/Card-Release.gif)

So to solve this we need save the last `gestureState.dy` value to maintain the card position. To do it, we create a variable that will accumulate vertical displacement on each release inside `onPanResponderRelease` method that will be executed after the touch release.

```jsx
export default function App() {
  let offSet = 0;

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
      },

      onPanResponderMove: (evt, gestureState) => {
        cardAnimatedValueY.setValue(gestureState.dy);
      },

      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderRelease: (evt, gestureState) => {
        offSet += gestureState.dy;
        cardAnimatedValueY.setOffset(offSet);
      },

      onPanResponderTerminate: (evt, gestureState) => {},
      onShouldBlockNativeResponder: (evt, gestureState) => true,
    }),
  ).current;
```

![](https://i.ibb.co/6mpVFGH/Release-Card-Ok.gif)

### Auto vertical displacement

At the post begin we saw a gif in which when we touch the card, move it move until certain point and release the card, it auto displacement to bottom or top. So our last step will be create this behavior.

As we saw, the method that catch the event related to release the touch is: `onPanResponderRelease`. Thus we will change this method to make our feature.

```jsx
export default function App() {
  let offSet = 0;
  let down = true;

  const panResponder = React.useRef(
    PanResponder.create({
      .
      .
      .

      onPanResponderRelease: (evt, gestureState) => {
        offSet += gestureState.dy;
        cardAnimatedValueY.setOffset(offSet);

        const restOffSet = 415 - offSet;

        if (down && offSet >= 100) {
          Animated.timing(cardAnimatedValueY, {
            toValue: restOffSet,
            duration: 500,
          }).start(() => {
            cardAnimatedValueY.setOffset(415);
            cardAnimatedValueY.setValue(0);
            offSet = 415;
            down = !down;
          });
        }
      },

      .
      .
      .
    }),
  ).current;
```

In the above code snippet we add the `down` variable that will contain the direction that the card will be take. The `restOffSet` represents the units that the card can slide to the bottom. So if the direction is down and the card offset is bigger than or equal to 100 units, the card will slide `restOffSet`.

![](https://i.ibb.co/34Df1R7/auto-Slide-Down.gif)

Now what we need is make the reverse path, to the top:

```jsx
export default function App() {
  let offSet = 0;
  let down = true;

  const panResponder = React.useRef(
    PanResponder.create({
      .
      .
      .

      onPanResponderRelease: (evt, gestureState) => {
        offSet += gestureState.dy;
        cardAnimatedValueY.setOffset(offSet);

        const restOffSet = 415 - offSet;

        if (down && offSet >= 100) {
          Animated.timing(cardAnimatedValueY, {
            toValue: restOffSet,
            duration: 500,
          }).start(() => {
            cardAnimatedValueY.setOffset(415);
            cardAnimatedValueY.setValue(0);
            offSet = 415;
            down = !down;
          });
        } else if (!down && offSet <= 355) {
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

      .
      .
      .
    }),
  ).current;
```

The `else` clausule define the reverse path to the top.

![](https://i.ibb.co/gmSmW37/Complete.gif)

This post was a little introduction about React Native Animated and we saw how tp apply some animations in an app. However we can explorer another libraries that improve the animations performance running on UI thread without having to go through the bridge on every frame: [React Native Reanimated](https://software-mansion.github.io/react-native-reanimated) and [React Native Gesture Handler](https://software-mansion.github.io/react-native-gesture-handler/).

[Source code]()
