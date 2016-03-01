'use strict';

const React = require('react-native');

const {
  View,
  ListView,
  Text,
  TouchableHighlight
} = React;

const Icon = require('react-native-vector-icons/MaterialIcons');
const TimerMixin = require('react-timer-mixin');
const styles = require('./Address.style');
const Loading = require('../components/common/Loading');
const IconButton = require('../components/common/IconButton');
const PageMixin = require('./PageMixin');

let addressData = [{"addressId":423,"memberId":247,"idCard":"360103199010135323","province":"上海市","city":"市辖区","isDefault":1,"consignee":"测试","phone":"18214261802","district":"卢湾区","detail":"天山西路"},{"addressId":427,"memberId":247,"idCard":"360103198710251324","province":"天津市","city":"市辖区","isDefault":0,"consignee":"测试人","phone":"18216541230","district":"河东区","detail":"测试地址"},{"addressId":1101,"memberId":247,"idCard":null,"province":"河北省","city":"秦皇岛市","isDefault":0,"consignee":"Test","phone":"13857061324","district":"山海关区","detail":"测试地址"}];

const RadioButton = (props) => {
  if (props.checked) {
    return <Icon name="check-circle" style={styles.checked} />
  } else {
    return <Icon name="radio-button-unchecked" style={styles.unchecked} />
  }
};

const AddressList = React.createClass({

  mixins: [TimerMixin, PageMixin],

  getInitialState() {
    return {
      loaded: false,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  },

  render(){
    if(this.state.loaded){
      return (
        <View style={styles.container}>
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}/>
          {this._renderNavigatorBar()}
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <Loading />
        </View>
      )
    }
  },

  _renderRow(data) {
    let {isDefault, consignee, phone, province, city, district, detail, addressId} = data;
    isDefault = isDefault == 1;
    return (
      <View style={styles.address}>
        <View style={[styles.info, isDefault ? styles.default: null]}>
          <Text style={[styles.addressText, isDefault ? styles.defaultText: null]}>
            收货人：{consignee} {phone}
          </Text>
          <Text style={[styles.addressText, isDefault ? styles.defaultText: null]}>
            {province}{city}{district}{detail}
          </Text>
        </View>
        <View style={styles.operation}>
          <IconButton
            key="default"
            text="设为默认"
            renderIcon={() => {
              return <RadioButton checked={isDefault}/>
            }}
            onPress={() => {
              this._setDefault(addressId)
            }}
          />
          <IconButton 
            key="edit"
            text="编辑"
            icon="edit"
            wrapStyle={styles.edit}
            onPress={() => {
              this._edit(addressId)
            }}
          />
          <IconButton 
            key="delete"
            text="删除"
            icon="delete"
            wrapStyle={styles.edit}
            onPress={() => {
              this._delete(addressId)
            }}
          />
        </View>
      </View>
    )
  },

  _renderAddButton() {
    return (
      <TouchableHighlight onPress={this._addAddress}>
        <Text style={styles.btnAdd}>新增地址</Text>
      </TouchableHighlight>
    )
  },

  _addAddress() {
    this.goto('AddressEdit')
  },

  _setDefault(addressId) {
    // update store
  },

  _edit(addressId) {
    let address = addressData.filter((item) => {
      return item.addressId === addressId
    })[0];
    this.goto('AddressEdit', address)
  },

  _delete(addressId) {
    // update store
  },

  componentDidMount() {
    this.fetchData();
  },

  fetchData() {
    this.setTimeout(() => {
      console.log(1);
      this.setState({
        loaded: true,
        dataSource: this.state.dataSource.cloneWithRows(addressData)
      });
    }, 1000);
  }

})

module.exports = AddressList;
