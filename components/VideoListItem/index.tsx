import React, { useCallback } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";

export interface VideoProps {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    user: {
      name: string;
      image: string;
    };
    views: number;
  };
}

const VideoListItem: React.FC<VideoProps> = ({ video }) => {
  const minutes = useCallback(() => {
    const min = Math.floor(video.duration / 60);
    if (min < 10) return `0${min}`;
    return min;
  }, [video.duration]);

  const seconds = useCallback(() => {
    const sec = video.duration % 60;
    if (sec < 10) return `0${sec}`;
    return sec;
  }, [video.duration]);

  const views = useCallback(() => {
    if (video.views >= 1_000_000)
      return `${(video.views / 1_000_000).toFixed(1)}m`;
    if (video.views >= 1_000) return `${(video.views / 1_000).toFixed(1)}k`;
    return video.views;
  }, [video.views]);

  return (
    <View key={video.id}>
      {/* Video Component */}
      <View>
        <View style={styles.videoCard}>
          <Image
            style={styles.thumbNail}
            source={{
              uri: video.thumbnail,
            }}
          />

          <View style={styles.timeContainer}>
            <Text style={styles.time}>
              {minutes()}:{seconds()}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{video.title}</Text>

          <Text style={styles.subTitle}>
            {video.user.name} · {views()} · {video.createdAt}
          </Text>
        </View>
        <Entypo
          name="dots-three-vertical"
          size={16}
          color="white"
          style={{ marginHorizontal: 5 }}
        />
      </View>
    </View>
  );
};

export default VideoListItem;
