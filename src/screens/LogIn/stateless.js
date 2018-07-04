import React, { Component } from 'react';
import { Container, Content, Button, Label, Form, Item, Input, Text, ListItem, CheckBox, Body } from 'native-base';

import { styles } from './styles'

export default class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      email: '',
      password: ''
    }
    this.onChecked = this.onChecked.bind(this)
    this.onPressButton = this.onPressButton.bind(this)
  }

  onChecked() {
    this.setState({checked: !this.state.checked})
  }

  onPressButton() {
    const {email, password} = this.state
    this.props.userLogin({email, password})
  }

  render() {
    const styleComponent = styles()
    return (
      <Container style={styleComponent.container}>
        <Content contentContainerStyle={styleComponent.contentContainer}>
          <Form>
            <Item floatingLabel style={styleComponent.item}>
              <Label style={styleComponent.label}>Usuario / Email</Label>
              <Input
                testID={'emailInputTextLogin'}
                value={this.state.email}
                onChangeText={text => this.setState({
                  ...this.state,
                  email: text
                })}
              />
            </Item>
            <Item floatingLabel style={styleComponent.item}>
              <Label style={styleComponent.label}>Password</Label>
              <Input
                testID={'passwordInputTextLogin'}
                secureTextEntry
                value={this.state.password}
                onChangeText={text => this.setState({
                  ...this.state,
                  password: text
                })}
              />
            </Item>
            <ListItem noIndent style={styleComponent.listItem}>
              <CheckBox checked={this.state.checked} color={'#cc0001'} onPress={this.onChecked} />
              <Body>
                <Text>Recordar Usuario y Password</Text>
              </Body>
            </ListItem>
            <Button
              block
              style={styleComponent.button}
              onPress={this.onPressButton}
              testID={'buttonLogin'}
            >
              <Text>ENTRAR</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
