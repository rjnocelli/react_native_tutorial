import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <ScrollView>
        {games.map((game) => (
          <View key={game.slug} style={styles.card}>
            {/* <Image source={{ uri: game.image }} style={styles.image}></Image> */}
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>
            <Text style={styles.score}>{game.score}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
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
