import React, { Component } from 'react'

import {
  Animated,
  Easing,
  Dimensions,
  Platform,
} from 'react-native';

import {
  List,
  ListItem,
  ListText,
  ListIcon,
  ListArrow
} from './styles'

import SortableList from 'react-native-sortable-list';
import Icon from 'react-native-vector-icons/MaterialIcons'
    
const data = [
  {
    image: 'https://placekitten.com/200/240',
    text: 'Chloe',
  },
  {
    image: 'https://placekitten.com/200/201',
    text: 'Jasper',
  },
  {
    image: 'https://placekitten.com/200/202',
    text: 'Pepper',
  },
  {
    image: 'https://placekitten.com/200/203',
    text: 'Oscar',
  },
];

export default class Basic extends Component {
  render() {
    return (
      <List>
        <SortableList
          data={data}
          renderRow={this._renderRow}
          onReleaseRow={(key, order) => console.log(order)}
          />
      </List>
    );
  }

  _renderRow = ({data, active}) => {
    return <Row data={data} active={active} />
  }
}

class Row extends Component {

  constructor(props) {
    super(props);

    this._active = new Animated.Value(0);

    this._style = {
      ...Platform.select({
        ios: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.1],
            }),
          }],
          shadowRadius: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10],
          }),
        },

        android: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.1],
            }),
          }],
          elevation: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 1],
          }),
        },
      })
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      Animated.timing(this._active, {
        duration: 300,
        easing: Easing.bounce,
        toValue: Number(nextProps.active),
      }).start();
    }
  }

  render() {
   const {data, active} = this.props;

    return (
      <ListItem onPress={() => {}}>
          <ListIcon source={{uri: data.image}} />
          <ListText>{data.text}</ListText>
          <ListArrow>
              <Icon name="keyboard-arrow-right" size={20} color="#000" />
          </ListArrow>
      </ListItem>
    );
  }
}