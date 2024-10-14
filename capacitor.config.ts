import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'login',
  webDir: 'www',
  server: {
    androidScheme: 'http'
  },

  plugins:{
    SplashScreen: {
      launchShowDuration:2000,
      backgroundColor:"#de0f17",
      showSpinner:false,
      androidSpinnerStyle:"small",
      splashFullScreen:true,
      splashImmersive:true,
      
    },
  }
};

export default config;
