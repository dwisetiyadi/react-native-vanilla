import React from 'react';
import { 
  View, 
  Text
} from 'react-native';
import { ISession } from '../../interfaces/components/index';
import StyleClass from '../../StyleClass';

const SessionContainer = ({
  session,
}: ISession): JSX.Element => (
  <View style={StyleClass.viewSession}>
    <Text style={StyleClass.listItemSession}>
      {session}
    </Text>
  </View>
);

export default SessionContainer;
