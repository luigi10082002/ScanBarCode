import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Linking, Image, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./style";
//import { api } from "../api/api"

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [Url, setUrl] = useState("");
  const [codigo, setCodigo] = useState("");

  useEffect(() => {
    loadSpots();
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  async function loadSpots() {
    const response = await AsyncStorage.getItem("@Url");
    const storage = response ? JSON.parse(response) : [];

    setUrl(storage);
  }

  async function handleBarCodeScanned({ data }) {
    setCodigo(data);
    setScanned(true);
  }

  function handleBarCodeSetScanned() {
    setScanned(false);
    setTimeout(() => {
      setScanned(true);
      redirCode();
    }, 1000);
  }

  async function redirCode() {
    await AsyncStorage.setItem("@Url", JSON.stringify(Url));

    const link = `${Url}${codigo}`;

    const supported = await Linking.canOpenURL(link);

    if (supported) {
      await Linking.openURL(link);
      //await api.post(Url, data);
    } else {
      alert("Não é possível abrir o link:", Url);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{
            height: "40%",
            width: "65%",
            alignSelf: "center",
            marginTop: "18%",
          }}
          source={require("../../assets/logotipo-proxy.png")}
        />
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
          style={{ height: 800, width: 800 }}
        />
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleBarCodeSetScanned}
          >
            <Text style={styles.buttonText}>CAPTURAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
