import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-redprimary">
      <Animatable.Text
        className="text-4xl text-white font-SemiBold"
        animation="fadeInDownBig"
        duration={2000}>
        Country Live
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
