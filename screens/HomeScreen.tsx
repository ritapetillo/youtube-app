import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import VideoListItem, { VideoProps } from "../components/VideoListItem";
import videos from "../assets/data/videos.json";

const HomeScreen = () => {
  return (
    <ScrollView>
      {videos.map((v) => (
        <VideoListItem video={v} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
