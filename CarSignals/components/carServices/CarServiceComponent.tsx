import React from 'react';
import { View, Text, Alert, Platform } from 'react-native';
import { styles } from './CarServiceComponentStyle';
import { CarServiceProps } from './types';
import { ActivityIndicator } from 'react-native-paper';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

class CarServiceComponent extends React.Component<CarServiceProps> {
    state = {
        mapRegion: null,
        hasLocationPermissions: false,
        locationResult: null,
        markers: []
    };

    componentDidMount() {
        this.getLocationAsync();
    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied'
            });
        } else {
            this.setState({ hasLocationPermissions: true });
        }

        let location = await Location.getCurrentPositionAsync({});

        this.setState({ locationResult: JSON.stringify(location) });

        const parameters = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            radius: 45000,
            type: 'car_repair',
            keyWord: 'service',
            apiKey: 'AIzaSyAM0nFytNaKuiu-m6XInr06vrLi312-7kk'
        };

        this.getServices(parameters);

        this.setState({
            mapRegion: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        });
    };

    async getServices(parameters) {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${parameters.latitude},${parameters.longitude}&radius=${parameters.radius}&type=${parameters.type}&keyword=${parameters.keyWord}&key=${parameters.apiKey}`;
        try {
            const result = await fetch(apiUrl);
            const json = await result.json();
            this.setState({
                markers: json.results
            });
        } catch (err) {
            console.log(err);
        }
    }

    renderMarkers() {
        let markers = [];
        this.state.markers.forEach((result: any) => {
            const marker = (
                <Marker
                    key={result.id}
                    coordinate={{
                        latitude: result.geometry.location.lat,
                        longitude: result.geometry.location.lng
                    }}
                    title={result.name}
                    description={'' + result.rating}
                />
            );
            markers.push(marker);
        });
        return markers;
    }

    render() {
        this.renderMarkers();
        return (
            <View style={styles.container}>
                {this.state.locationResult === null ||
                !this.state.markers.length ? (
                    <View>
                        <ActivityIndicator size="large" color="#000" />
                        <Text>Finding your current location...</Text>
                    </View>
                ) : this.state.hasLocationPermissions === false ? (
                    <Text>Location permissions are not granted.</Text>
                ) : this.state.mapRegion === null ? (
                    <Text>Map region doesn't exist.</Text>
                ) : (
                    <MapView
                        style={styles.mapStyle}
                        region={this.state.mapRegion}
                    >
                        <Marker
                            coordinate={{
                                latitude: this.state.mapRegion.latitude,
                                longitude: this.state.mapRegion.longitude
                            }}
                            title={'My location'}
                            description={''}
                            pinColor="#ff9900"
                        />
                        {this.renderMarkers().length
                            ? this.renderMarkers()
                            : null}
                    </MapView>
                )}
            </View>
        );
    }
}

export default CarServiceComponent;
