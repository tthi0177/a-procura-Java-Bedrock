import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function App() {
  const [edition, setEdition] = useState('JAVA');
  const isJava = edition === 'JAVA';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>A Procura Java/Bedrock</Text>
        <Text style={styles.packageId}>com.aprocurajavabedrock.tthi0177</Text>

        <View style={styles.tabs}>
          <TouchableOpacity 
            style={[styles.btn, isJava && styles.btnActive]} 
            onPress={() => setEdition('JAVA')}
          >
            <Text style={styles.btnText}>Modo Java</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.btn, !isJava && styles.btnActive]} 
            onPress={() => setEdition('BEDROCK')}
          >
            <Text style={styles.btnText}>Modo Bedrock</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.info}>
          {isJava ? 'Modo Java: Mods, Shaders, Plugins Bukkit e Launchers.' : 'Modo Bedrock: Addons, Texturas e APKs.'}
        </Text>

        <Text style={styles.section}>Launchers Android:</Text>
        <TouchableOpacity 
          style={styles.card}
          onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.bettly.launcher')}
        >
          <Text style={styles.cardText}>Bettly Launcher (Play Store)</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardText}>Zalite Launcher 1 & 2</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>Mojo Launcher</Text>
        </View>

        <Text style={styles.footer}>tthi0177 (Thiago)</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111317' },
  scroll: { padding: 20 },
  title: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
  packageId: { color: '#22c55e', fontSize: 12, marginBottom: 15 },
  tabs: { flexDirection: 'row', gap: 10, marginBottom: 15 },
  btn: { flex: 1, padding: 12, backgroundColor: '#1f2937', borderRadius: 8, alignItems: 'center' },
  btnActive: { backgroundColor: '#22c55e' },
  btnText: { color: '#ffffff', fontWeight: 'bold' },
  info: { color: '#9ca3af', marginBottom: 20 },
  section: { color: '#ffffff', fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#1a1c20', padding: 15, borderRadius: 8, marginBottom: 10 },
  cardText: { color: '#ffffff' },
  footer: { color: '#6b7280', fontSize: 12, textAlign: 'center', marginTop: 30 }
});
