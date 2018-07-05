import React from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'

export default class PieChartMasmovil extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0
    }
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ['google', 'facebook'];
    const values = [25, 25];
    const colors = ['#b7b7b7', '#cc0001']
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
        onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
      }
    })
    const deviceWidth = Dimensions.get('window').width

    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <PieChart
          style={{ height: 200 }}
          outerRadius={'80%'}
          innerRadius={'45%'}
          data={data}
        />
        <Text
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            this.setState({ labelWidth: 70 });
          }}
          style={{
            position: 'absolute',
            left: deviceWidth / 2 - 90 / 2,
            textAlign: 'center',
            width: 70
          }}>
          11500 MB
          50%
        </Text>
      </View>
    )
  }
}

