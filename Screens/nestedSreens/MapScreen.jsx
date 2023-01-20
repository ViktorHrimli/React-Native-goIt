import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const [coords, setCoords] = useState(null);
  useEffect(() => {
    if (route.params) {
      setCoords(route.params);
    }
  }, [route.params]);
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.conteiner}
        initialRegion={{
          latitude: coords?.latitude,
          longitude: coords?.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          title="Travel point"
          coordinate={{
            latitude: coords?.latitude,
            longitude: coords?.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});
