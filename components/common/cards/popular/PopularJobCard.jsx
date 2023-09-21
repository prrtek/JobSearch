import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <Pressable
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <Pressable style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </Pressable>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <Text style={styles.location}>{item.job_country}</Text>
    </Pressable>
  );
};

export default PopularJobCard;
