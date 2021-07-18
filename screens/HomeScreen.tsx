import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import VideoListItem, { VideoProps } from "../components/VideoListItem";
import videos from "../assets/data/videos.json";

const HomeScreen = () => {
  return (
    <ScrollView>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
