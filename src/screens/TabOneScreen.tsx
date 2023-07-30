import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, LogBox, Text, View } from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

const BLTManager = new BleManager();

const SERVICE_UUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b';

const MESSAGE_UUID = '6d68efe5-04b6-4a85-abc4-c2670b7bf7fd';
const BOX_UUID = 'f27b53ad-c63d-49a0-8c0f-9f297e6cc520';

function StringToBool(input: string) {
  if (input === '1') {
    return true;
  }
  return false;
}

function BoolToString(input: boolean) {
  if (input === true) {
    return '1';
  }
  return '0';
}

const TabTwoScreen = () => {
  // Is a device connected?
  const [isConnected, setIsConnected] = useState(false);
  const navigation = useNavigation();
  // What device is connected?
  const [connectedDevice, setConnectedDevice] = useState<Device>();

  const [message, setMessage] = useState('Nothing Yet');
  const [boxvalue, setBoxValue] = useState(false);
  const item = ['light', 'fan', 'volume up', 'volume down'];

  return (
    // <View>
    //   {/* Title */}
    //   <View>
    //     <Text style={{ paddingBottom: 20, paddingLeft: 20, fontSize: 50 }}>
    //       Set the functionality of gestures
    //     </Text>
    //   </View>
    //   <View style={{ paddingBottom: 20 }} />
    //   {/* Connect Button */}
    //   <Button buttonType="leftIcon" icon={SVG} onPress={() => {}}>
    //     set functionality for left
    //   </Button>
    //   <View style={{ paddingBottom: 20 }} />
    //   <Button buttonType="leftIcon" icon={SVGRight}>
    //     set functionality for right
    //   </Button>
    //   <View style={{ paddingBottom: 20 }} />
    //   <Button buttonType="leftIcon" icon={SVGUp}>
    //     set functionality for up
    //   </Button>
    //   <View style={{ paddingBottom: 20 }} />
    // </View>
    <View>
      <Text style={{ paddingBottom: 20, paddingLeft: 20, fontSize: 50 }}>
        Set the functionality for right
      </Text>

      <FlatList
        data={item}
        renderItem={({ item }) => {
          return (
            <>
              <Button
                buttonType="leftIcon"
                onPress={() => {
                  setBoxValue(!boxvalue);
                }}
              >
                {item}
              </Button>
              <View style={{ paddingBottom: 20 }} />
            </>
          );
        }}
      />
    </View>
  );
};
export default TabTwoScreen;
