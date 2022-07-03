import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Keyboard,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {CSS_CONSTANTS} from '../utils/css-contants';
import filter from 'lodash.filter';
import {Avatar, Input} from 'native-base';
import { ApplicationProvider, Avatar, Input } from '@ui-kitten/components'
import { mapping, light as lightTheme } from '@eva-design/eva'

class HomeScreen extends React.Component {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    query: '',
    fullData: [],
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const {page, seed} = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({loading: true});

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          fullData: res.results,
        });
      })
      .catch(error => {
        this.setState({error, loading: false});
      });
  };

  contains = ({name, email}, query) => {
    const {first, last} = name;
    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }
    return false;
  };

  handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const data = filter(this.state.fullData, user => {
      return this.contains(user, formattedQuery);
    });
    this.setState({data, query: text});
  };

  renderHeader = () => (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={this.handleSearch}
        status="info"
        placeholder="Search"
        style={{
          borderRadius: 25,
          borderColor: '#333',
          backgroundColor: '#fff',
        }}
        textStyle={{color: '#000'}}
        clearButtonMode="always"
      />
    </View>
  );

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '5%',
        }}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) {
      return null;
    }
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginTop: 40,
        }}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => alert('Item pressed!')}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 16,
                  alignItems: 'center',
                }}>
                <Avatar
                  source={{uri: item.picture.thumbnail}}
                  size="giant"
                  style={{marginRight: 16}}
                />
                <Text
                  category="s1"
                  style={{
                    color: '#000',
                  }}>{`${item.name.first} ${item.name.last}`}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
  },
  buttonsContainer: {
    alignItems: 'center',
    marginTop: 160,
    width: '100%',
  },
  forgotPasswordTextContainer: {
    marginTop: 25,
  },
  forgotPasswordText: {
    color: CSS_CONSTANTS.COLOR_PRIMARY,
    textDecorationLine: 'underline',
  },
  logoContainer: {
    marginBottom: 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  logostyle: {
    width: 275,
    height: 60,
    resizeMode: 'contain',
  },
  wrongEmailOrPasswordError: {
    color: CSS_CONSTANTS.ERROR_COLOR,
    alignSelf: 'center',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
export default HomeScreen;
