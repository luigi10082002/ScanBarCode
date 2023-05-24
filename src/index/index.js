import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Linking,
  Image 
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';

import axios from 'axios';

import { styles } from "./style";
import { api } from "../api/api"

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [Url, setUrl] = useState("");
  const [go, setGo] = useState(false);

  useEffect(() => {
    loadSpots();
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  async function loadSpots() {
    const response = await AsyncStorage.getItem("@Url");
    const storage = response ? JSON.parse(response) : [];

    setUrl(storage);
  }

  async function handleBarCodeScanned({ data }) {
    setScanned(true);
    alert(`Url ${Url} and Data CodeBar ${data}`);
    
    await AsyncStorage.setItem("@Url", JSON.stringify(Url));

    setGo(true);

    //await api.post(Url, data);

    /*await axios({
      method: 'post',
      url: Url,
      data: data
    });*/

  };
  
  if (go == false) {
  return (
    <View style={styles.container}>
     
        <View style={styles.header}>
          <Image style={{height: '40%', width: '65%', alignSelf: "center", marginTop: '18%'}} source={require('../../assets/logotipo-proxy.png')} />
        </View>
        <TextInput
          style={styles.labelQtd}
          autoCorrect={false}
          onChangeText={setUrl}
          value={Url}
          keyboardType="url"
          placeholder="Digite a url"
          autoCapitalize="none"
          //maxLength={5}
          //textAlign="right"
        />

          <View style={styles.scanner}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 600, width: 600 }}
            />
          </View>
    </View>
  );
  } else {
    return (

    <WebView
        source={{ uri: Url }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
