import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import video from "../../assets/data/video.json";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const VideoScreen = () => {
  return (
    <SafeAreaView>
      <Image style={styles.videoPlayer} source={{ uri: video.thumbnail }} />
      <View style={styles.infoContainer}>
        <Text style={styles.tags}>{video.tags}</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.subTitle}>
          {video.user.name} · {} · {video.createdAt}
        </Text>
      </View>
      <View style={styles.actionListContainer}>
        <View style={styles.actionListItem}>
          <AntDesign name="like2" size={28} color="grey" />
          <Text style={styles.iconText}>2323</Text>
        </View>
        <View style={styles.actionListItem}>
          <AntDesign name="dislike2" size={28} color="grey" />
          <Text style={styles.iconText}>23</Text>
        </View>
        <View style={styles.actionListItem}>
          <Ionicons name="chatbubbles-outline" size={28} color="grey" />
          <Text style={styles.iconText}>Live Chat</Text>
        </View>
        <View style={styles.actionListItem}>
          <MaterialCommunityIcons name="share" size={28} color="grey" />
          <Text style={styles.iconText}>Share</Text>
        </View>
        <View style={styles.actionListItem}>
          <MaterialCommunityIcons name="download" size={28} color="grey" />
          <Text style={styles.iconText}>Download</Text>
        </View>
        <View style={styles.actionListItem}>
          <MaterialIcons name="save" size={28} color="grey" />
          <Text style={styles.iconText}>Save</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VideoScreen;
