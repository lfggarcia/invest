import React, {Component} from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import Picker from 'react-native-picker-select';
import {connect} from 'react-redux';
import {AppDispatch} from '@core/store';
import {addAlert} from '@core/store/reducers/alerts.reducer';
import {searchStyle} from '@features/search/styles/search.style';
import {Input} from '@core/components/form/input';
import {Stock} from '@types/stock';

import API from '@core/API';

interface IProps {
  addAlert: (stock: Stock) => void;
}
interface IState {
  stock: Stock | null;
  highestPrice: string;
  stocks: Stock[];
  loading: boolean;
}

class SearchSymbolScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      stock: null,
      highestPrice: '',
      stocks: [],
      loading: true,
    };
  }

  async getStocks() {
    try {
      const params = {
        exchange: 'US',
      };
      const response = await API.get<Stock[]>('/stock/symbol', {params});
      this.setState({
        stocks: response.data.map(stock => ({
          ...stock,
          value: stock.symbol,
          label: stock.description,
        })),
        loading: false,
      });
    } catch (error) {
      this.setState({stocks: [], loading: false});
    }
  }

  componentDidMount(): void {
    this.getStocks();
  }

  handleAddAlert() {
    const {stocks, stock, highestPrice} = this.state;
    const _stock: Stock = stocks.find(({value}) => stock === value);
    this.props.addAlert({
      ..._stock,
      priceAlert: highestPrice,
    });
    Toast.show({
      type: 'success',
      text1: `Stock ${_stock.description}`,
      text2: 'Has been added successfully to your alerts',
    });
  }

  handleEnableToAdd() {
    const {stock, highestPrice} = this.state;
    let disable = true;

    if (stock !== null && Boolean(highestPrice)) {
      disable = false;
    }

    return disable;
  }

  handleChangePrice(price: string) {
    if (Number(price)) {
      this.setState({highestPrice: price});
    }
  }

  render(): React.ReactNode {
    const {stock, highestPrice} = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={searchStyle.container}>
          <View style={searchStyle.content}>
            <View style={searchStyle.inputContainer}>
              <Text style={searchStyle.inputLabel}>Stock</Text>
              <Picker
                placeholder={{
                  label: 'Please Select a Stock',
                  value: 'Please Select a Stock',
                }}
                style={{
                  inputAndroid: searchStyle.inputBox,
                  inputIOS: searchStyle.inputBox,
                }}
                value={stock}
                onValueChange={value => this.setState({stock: value})}
                items={this.state.stocks}
              />
            </View>
            <Input
              label="High Price(USD)"
              value={highestPrice}
              style={searchStyle.inputContainer}
              labelStyle={searchStyle.inputLabel}
              inputStyle={searchStyle.inputBox}
              keyboardType="decimal-pad"
              placeholder="0"
              onChangeText={this.handleChangePrice.bind(this)}
            />
            <TouchableOpacity
              style={[
                searchStyle.button,
                this.handleEnableToAdd() && searchStyle.disableButton,
              ]}
              onPress={this.handleAddAlert.bind(this)}
              disabled={this.handleEnableToAdd()}>
              <Text style={searchStyle.buttonText}>Add Alert</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const mapActionsToProps = (dispatch: AppDispatch) => ({
  addAlert: (newStock: Stock) => dispatch(addAlert(newStock)),
});

export default connect(null, mapActionsToProps)(SearchSymbolScreen);
