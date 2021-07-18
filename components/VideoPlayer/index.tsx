import React, { useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Video } from "expo-av";

interface VideoPlayerProps {
  videoURI: string;
  thumbnailURI: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoURI,
  thumbnailURI,
}) => {
  const videoRef = useRef<Video>(null);

  return (
    <View>
      <Video
        ref={videoRef}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
        source={{
          uri: videoURI,
        }}
        posterSource={{ uri: thumbnailURI }}
        usePoster={true}
        useNativeControls
        resizeMode="contain"
        // shouldPlay
      />
    </View>
  );
};

export default VideoPlayer;
