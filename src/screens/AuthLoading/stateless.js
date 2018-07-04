import React, { Component } from 'react';
import Spinner from 'react-native-spinkit';
import { Container, Content } from 'native-base';

import { styles } from './styles';

export default class AuthLoading extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const stylesComponent = styles(this.props)({alignItems: 'center'});
    return (
      <Container style={stylesComponent.container}>
        <Content contentContainerStyle={stylesComponent.content}>
          <Spinner size={37} type={'Bounce'} color={'#C00'}/>
        </Content>
      </Container>
    );
  }
}
