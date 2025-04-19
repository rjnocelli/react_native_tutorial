import { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      {/* <Image source={{ uri: game.image }} style={styles.image}></Image> */}
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>{game.score}</Text>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {},
  image: { width: 107, height: 147, borderRadius: 10 },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  score: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
});
