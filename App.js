import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [edition, setEdition] = useState('JAVA'); // 'JAVA' ou 'BEDROCK'

  const isJava = edition === 'JAVA';
  const accentColor = isJava ? '#22c55e' : '#06b6d4';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#111317" />
      
      {/* Topo do App */}
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>A Procura Java/Bedrock</Text>
          <Text style={[styles.editionSubtitle, { color: accentColor }]}>
            Minecraft {isJava ? 'Java Edition' : 'Bedrock Edition'}
          </Text>
        </View>
        <TouchableOpacity 
          style={[styles.editionBadge, { backgroundColor: accentColor }]}
          onPress={() => setEdition(isJava ? 'BEDROCK' : 'JAVA')}
        >
          <Text style={styles.editionBadgeText}>{edition}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Banner de Boas-vindas */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Bem-vindo ao BlockVault!</Text>
          <Text style={styles.bannerDesc}>
            Seu centro completo de mods, addons, shaders, mapas, servidores e ferramentas Minecraft.
          </Text>
        </View>

        {/* Categorias Rápidas */}
        <Text style={styles.sectionTitle}>Categorias ({edition})</Text>
        <View style={styles.grid}>
          {(isJava 
            ? ['Mods', 'Modpacks', 'Datapacks', 'Shaders', 'Texturas', 'Servidores', 'Plugins', 'Launchers']
            : ['Addons', 'Modpacks', 'Shaders', 'Texturas', 'Mundos', 'Servidores', 'APK Bedrock']
          ).map((cat, idx) => (
            <View key={idx} style={styles.card}>
              <Text style={styles.cardText}>{cat}</Text>
            </View>
          ))}
        </View>

        {/* Launchers Suportados */}
        {isJava && (
          <View style={styles.launchersSection}>
            <Text style={styles.sectionTitle}>Launchers Suportados</Text>
            <Text style={styles.launcherItem}>• Bettly Launcher (Google Play Store)</Text>
            <Text style={styles.launcherItem}>• Zalite Launcher 1 & 2</Text>
            <Text style={styles.launcherItem}>• Mojo Launcher</Text>
          </View>
        )}

        {/* Rodapé Obrigatório */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>tthi0177 (Thiago)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111317',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#22252a',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  editionSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  editionBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  editionBadgeText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  scrollContent: {
    padding: 20,
  },
  banner: {
    backgroundColor: '#1a1c20',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#2d3139',
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  bannerDesc: {
    fontSize: 13,
    color: '#9ca3af',
    lineHeight: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#1a1c20',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2d3139',
  },
  cardText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '500',
  },
  launchersSection: {
    backgroundColor: '#1a1c20',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  launcherItem: {
    color: '#9ca3af',
    fontSize: 13,
    marginBottom: 6,
  },
  footer: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
  },
});
