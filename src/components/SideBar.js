import React from "react";
import { Image, View } from "react-native";
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  Left,
  Right,
  Icon
} from "native-base";

const routes = ["Consumo"];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            <View
              style={{
                height: 160,
                width: "100%",
                alignSelf: "stretch",
                position: "relative",
                backgroundColor:'#cc0001'
              }}
            />
            <Image
              square
              style={{
                height: 100,
                width: 100,
                position: "absolute",
                alignSelf: "center",
                top: 20
              }}
              source={
                require(
                  "../../assets/hero-asset.png")
              }
            />
            <Text style={{
              position: "absolute",
              alignSelf: "center",
              bottom: 15,
              color: '#FFF'}}>6111232344</Text>
          </View>
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 10
            }}
            renderRow={data => {
              return (
                <ListItem
                  noBorder
                  icon
                  onPress={() => this.props.navigation.navigate(data)}
                  touchableHighlightStyle={{marginLeft: 10}}
                >
                  <Left>
                    <Icon type={'Foundation'} name={'graph-bar'} />
                  </Left>
                  <Right
                  >
                    <Text style={{color: '#000'}}>{data}</Text>
                  </Right>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
