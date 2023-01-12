import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const [coords, setCoords] = useState(null);
  useEffect(() => {
    if (route.params) {
      setCoords(route.params.coords);
    }
  }, [route.params]);
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.conteiner}
        initialRegion={{
          latitude: coords?.latitude || 40,
          longitude: coords?.longitude || 21,
          latitudeDelta: 0.001,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          title="Travel point"
          coordinate={{
            latitude: coords?.latitude || 40,
            longitude: coords?.longitude || 21,
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
