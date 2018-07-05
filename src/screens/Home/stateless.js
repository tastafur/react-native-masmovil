import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header, Content, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { styles } from './styles'
import PieChartMasmovil from '../../components/PieChart'
export default class Home extends Component {
  render() {
    const styleComponent = styles()
    return (
      <Container testID={'homeView'}>
        <Header style={styleComponent.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon style={styleComponent.headerIcon} name={'menu'} />
            </Button>
          </Left>
          <Body>
            <Title style={styleComponent.headerTitle}>Consumo</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <View style={styleComponent.titleGraphContainer}>
            <Title style={styleComponent.titleGraph}>INTERNET</Title>
          </View>
          <PieChartMasmovil/>
        </Content>
      </Container>
    );
  }
}
