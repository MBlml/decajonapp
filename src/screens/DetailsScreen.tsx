import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigator';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: DetailsScreenRouteProp;
};

const DetailsScreen: React.FC<Props> = ({ route }) => {
  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Item ID: {route.params.itemId}</Text>
    </View>
  );
};

export default DetailsScreen;
