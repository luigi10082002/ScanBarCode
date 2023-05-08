import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";

import { styles } from "./style";

export default function Index() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);

  const [code, setCode] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  /*async function handleBarCodeScanned({ data }) {
    setCode(data);
    setScanned(true);
  }*/

  function handleBarCodeSetScanned() {
    setScanned(false);
    setTimeout(() => {
      setScanned(true);
    }, 1000);
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function handleBarCodeScanned({ data }) {
    setUrl(data);
    setScanned(true);
 
    const dados = code;

    await api.post(data, dados).then((response) => {

      Alert.alert(
        "Sucesso!",
        `Código enviado`,
        [
          {
            text: "Ok",
            onPress: async () => {
              
            }
          }
        ]
      );
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Teste tela inicial</Text>
      </View>

      <TextInput
        style={styles.labelQtd}
        autoCorrect={false}
        //onChangeText={setCode}
        value={url}
        keyboardType="url"
        placeholder=""
        //maxLength={5}
        //textAlign="right"
      />
      <View style={styles.scanner}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 600, width: 600 }}
        />

        <Text>Teste tela inicial</Text>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleBarCodeSetScanned}
        >
          <Text style={styles.buttonText}>CAPTURAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.code}>
        <Text style={styles.textCode}>{code}</Text>
      </View>
      
    </View>
  );
}
