import React from 'react' ;

import {
    View,
    Text,
    StyleSheet
} from 'react-native' ;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    welcome : {
        fontSize : 20,
        fontWeight : 'bold'
    }
});

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome
            </Text>
        </View>
    )
}

export default Welcome ;