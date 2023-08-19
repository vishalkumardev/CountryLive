import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/solid';

const Card = ({item, navigation, index}) => {
  return (
    <View className="px-4 py-2 mb-4 ">
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULSPiQKGEcCtCxrkr4t9Ub8U-Jwzv3kXu2RMOzQoihg&s',
        }}
        className="h-52 w-full rounded-md"
        resizeMethod="resize"
      />
      <View className="px-2 my-2">
        <Text className="text-sm text-gray-700 font-SemiBold">
          {item.title}
        </Text>
        <Text className="text-xs my-2  ">{item.description}</Text>
        <View className="flex-row justify-between items-center  my-2">
          <Text className="text-xs  text-gray-700 ">{item.author}</Text>
          <Text className="text-xs text-gray-700 ">
            {item.publishedAt.toLocaleString('en-GB', {timeZone: 'UTC'})}
          </Text>
        </View>
        <TouchableOpacity
          className="bg-redprimary px-4 py-1.5 mt-2 w-32 justify-center items-center rounded-md flex-row space-x-2"
          onPress={() =>
            navigation.navigate('NewsViewer', {
              url: item.url,
            })
          }>
          <Text className="text-white text-xs font-Medium">Read More</Text>
          <ArrowRightIcon color="#fff" size={18} />
        </TouchableOpacity>
      </View>

      <View className="absolute top-4 right-4 bg-redprimary px-4 rounded-md">
        <Text className="text-xs text-white py-1">{item.source.name}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
