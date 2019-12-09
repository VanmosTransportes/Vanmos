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

export default class Basic extends Component {
  render() {
    return (
      <List>
        <SortableList
          data={this.props.list}
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

  componentWillReceiveProps(nextProps) {
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