import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
//imports
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera';

const QRCodeReader = () => {
    const [qr, setQr] = useState("")
    let onRead = (e) => {
        setQr(e.data)
    }
    return (
        <QRCodeScanner
            onRead={onRead}
            reactivate={true}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <Text style={styles.textBold}>{qr}</Text>
            }
            bottomContent={
                <Text>{qr}</Text>
            }
        />
    );
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }

})
export default QRCodeReader;