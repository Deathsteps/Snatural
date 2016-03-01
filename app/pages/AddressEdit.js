'use strict';

const React = require('react-native');

const {
  View,
  Text,
  TextInput,
  TouchableHighlight
} = React;

const styles = require('./Address.style');

const PageMixin = require('./PageMixin');

const Button = (props) => {
  let {onPress, text} = props;
  return (
    <TouchableHighlight onPress={onPress}>
      <Text style="styles.button">{text}</Text>
    </TouchableHighlight>
  );

}

const AddressEdit = React.createClass({

  mixins: [PageMixin],

  getInitialState() {
    let {consignee, phone, province, city, district, detail} = this.props.params;
    return {consignee, phone, province, city, district, detail};
  },

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          key="name"
          value={this.state.consignee}
          style={styles.textInput}
          autoCorrect={false}
          placeholder="收货人姓名"
          onChangeText={(text) => this.setState({consignee: text})}
        />
        <TextInput
          key="phone"
          value={this.state.phone}
          style={styles.textInput}
          autoCorrect={false}
          placeholder="手机号码"
          onChangeText={(text) => this.setState({phone: text})}
        />
        <TextInput
          key="phone"
          style={styles.textInput}
          autoCorrect={false}
          placeholder="收货地址"
        />
        <TextInput
          key="phone"
          value={this.state.detail}
          style={styles.textArea}
          autoCorrect={false}
          placeholder="详细地址"
          onChangeText={(text) => this.setState({detail: text})}
        />
        <Button text="保存" onPress={this._onSave}/>
      </View>
    )
  },

  _onSave() {
    if(this.props.consignee){
      // to save the edited address
    }else{
      // to create an address
    }
    this.goBack();
  }

})

module.exports = AddressEdit;
