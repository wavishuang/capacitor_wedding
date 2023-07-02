import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wedding.app',
  appName: 'wedding-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
