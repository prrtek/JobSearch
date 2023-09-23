import React from "react";
import { View, Text, Pressable, Linking } from "react-native";

import styles from "./footer.style";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </Pressable>
    </View>
  );
};

export default Footer;
