import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.crediexpress.clients.app',
  appName: 'crediexpressclientsapp',
  webDir: 'dist',
  android: {
    release: {
      keystorePath: './crediexpress-release.jks',
      keystorePassword: '221356',
      keystoreKeyAlias: 'crediexpress',
      keystoreKeyPassword: 'chakita',
      releaseType: 'APK', // or 'APK'
    },
  },
}

export default config
