import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './CarServiceComponentStyle';
import { CarServiceProps } from './types';
import { ActivityIndicator } from 'react-native-paper';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { showToaster } from '../../utils';
import { mainColor } from '../../constants';

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

        if (this.state.locationResult !== null || this.state.markers.length) {
            showToaster("Press on the markers for additional information");
        }
    };

    async getServices(parameters) {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${parameters.latitude},${parameters.longitude}&radius=${parameters.radius}&type=${parameters.type}&keyword=${parameters.keyWord}&key=${parameters.apiKey}`;
        try {
            const result = await fetch(apiUrl);
            const json = await result.json();
            this.setState({
                markers: json.results
            });
        } catch (err) {}
    }

    validateAddress(vicinity: string) {
        const regExp = new RegExp(/[a-zA-Z]/);

        if (vicinity && vicinity.match(regExp)) {
            return vicinity;
        }

        return "";
    }

    renderMarkerCallout(title: string, vicinity?: string, status?: any, rating?: string) {
        return (
            <Callout tooltip>
                <View style={styles.markerCalloutText}>
                    {title ? <Text style={styles.markerTitle}>{title}</Text> : null}
                    {this.validateAddress(vicinity) ? <Text>Address: {vicinity}</Text> : null}
                    {status ? <Text>Status: {status.open_now ? "Open" : "Closed"}</Text> : null}
                    {rating ? <Text>Rating: {rating}★</Text> : null}
                </View>
            </Callout>
        )
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
                >
                    {this.renderMarkerCallout(result.name, result.vicinity, result.opening_hours, result.rating)}
                </Marker>
            );
            markers.push(marker);
        });
        return markers;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.locationResult === null ||
                !this.state.markers.length ? (
                    <View>
                        <ActivityIndicator size="large" color={mainColor} />
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
                            pinColor="#ff9900"
                        >
                            {this.renderMarkerCallout("My location")}
                        </Marker>
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
