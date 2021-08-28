import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const ScrolledView = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rerum
        velit libero, soluta accusantium, ad recusandae nesciunt dicta et iure
        maxime voluptate est repudiandae hic earum officiis odio harum nam.
      </Text>
    </ScrollView>
  );
};
