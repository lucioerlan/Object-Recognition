
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { fetch } from "@tensorflow/tfjs-react-native";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as jpeg from "jpeg-js";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Skeleton from "../../components/Skeleton";
import { homeStyles } from "./style";

class Home extends React.Component {
  state = {
    isModelReady: false,
    predictions: null,
    image: null,
  };

  async componentDidMount() {
    await tf.ready();
    this.model = await mobilenet.load();
    this.setState({ isModelReady: true });
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  imageToTensor(rawImageData) {
    const TO_UINT8ARRAY = true;
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }

    return tf.tensor3d(buffer, [height, width, 3]);
  }

  classifyImage = async () => {
    try {
      const imageAssetPath = Image.resolveAssetSource(this.state.image);
      const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
      const rawImageData = await response.arrayBuffer();
      const imageTensor = this.imageToTensor(rawImageData);
      const predictions = await this.model.classify(imageTensor);
      this.setState({ predictions });
      console.log(predictions);
    } catch (error) {
      console.log(error);
    }
  };

  selectImage = async () => {
    try {
      let response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!response.cancelled) {
        const source = { uri: response.uri };
        this.setState({ image: source });
        this.classifyImage();
      }
    } catch (error) {
      console.log(error);
    }
  };

  renderPrediction = (prediction) => {
    return <Text key={prediction.className}>{prediction.className}</Text>;
  };

  render() {
    const { isModelReady, predictions, image } = this.state;

    if (this.state.isModelReady == false) {
      return <Skeleton />;
    }

    return (
      <View style={homeStyles.container}>
        <View style={homeStyles.imageWrapper}>
          {image && <Image source={image} style={homeStyles.imageContainer} />}
        </View>

        <View style={homeStyles.predictionWrapper}>
          {isModelReady && image && (
            <Text style={homeStyles.text}>
              {" "}
              Previsão : {predictions ? "" : "Prevendo..."}
            </Text>
          )}
          {isModelReady &&
            predictions &&
            predictions.map((p) => this.renderPrediction(p))}
        </View>
        <LinearGradient
          colors={["#8e2de2", "#4a00e0"]}
          style={{
            borderRadius: 20,
            alignSelf: "center",
            color: "#fff",
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Button
            type="clear"
            buttonStyle={homeStyles.buttonUpload}
            containerStyle={homeStyles.ButtonUploadContainer}
            title="Escolher Imagem"
            onPress={isModelReady ? this.selectImage : undefined}
            icon={
              <Icon
                type="antdesign"
                name="picture"
                size={30}
                color="white"
                marginLeft={20}
              />
            }
            titleStyle={homeStyles.uploadBtnTittle}
          />
        </LinearGradient>
      </View>
    );
  }
}


export default Home;
