import React from 'react';

import { Animated } from 'react-native'
import { PanGestureHandler, State } from'react-native-gesture-handler'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Driver from '~/components/Map/Map';
import Passenger from '~/components/Map/Passenger';


import {
  Container,
  Content,
  Card,
  CardContent
  }
from './styles';

export default function Main(props){
  const { navigate } = props.navigation;
  const utype = JSON.stringify(props.navigation.getParam('type'))
  
  
  let offset = 0
  const translateY = new Animated.Value(0)
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChange(event) {
    if(event.nativeEvent.oldState == State.ACTIVE){
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if(translationY >= 100){
        opened = true; 
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true, 
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset)
        translateY.setValue(0)
      });
    }
  }

  return(
    <Container>
      <Header navigation={props.navigation} utype={utype} />

      <Content>
        <Tabs translateY={translateY} navigation={props.navigation} utype={utype} />
        
        {
          !utype.includes('owner')
          &&
          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Card style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 350],
                  outputRange: [-50, 0, 350],
                  extrapolate: 'clamp',
                }),
              }]
            }}>
              <CardContent>
                {
                utype.includes('passenger')
                &&
                <Passenger />
                }
                {
                utype.includes('driver')
                &&
                <Driver />
                }
              </CardContent>
            </Card>
          </PanGestureHandler>
        }

      </Content>      
    </Container>
  );
}


