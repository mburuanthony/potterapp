<h2 align='center'>harry potter characters app</h2>

### clone

```bash
# HTTPS
git clone https://github.com/mburuanthony/potterapp.git

# SSH
git clone git@github.com:mburuanthony/potterapp.git
```

### install dependencies

```bash
npm install
# or delete the package-lock.json and use yarn
yarn install
```

### start dev server

```bash
expo start
# or
npx expo start
```

### build

use the EAS cli to build the app, APK for testing and AAB for submission to the play store

```bash
# 1. install the EAS CLI
npm install --global eas-cli

# 2. Build APK preview file
npx eas build -p android --profile preview

# or build a production ready Android App Bundle
npx eas build --p android --release-channel release --profile production
```

```js
// EAS JSON config
{
  "cli": {
    "version": ">= 3.6.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "resourceClass": "m1-medium"
      }
    },
    "preview": {
      // buildtype APK
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "resourceClass": "m1-medium"
      }
    },
    "release": {
      // buildtype AAB
      "releaseChannel": "release"
    },
    "production": {
      "ios": {
        "resourceClass": "m1-medium"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

<br>

<div style='display:flex; flex-direction:row; flex-wrap:wrap; align:center; justify-content:center; gap:10px;'>
<img src='https://user-images.githubusercontent.com/76121306/229055684-0e9bfc0d-6a45-4d0f-bc29-54eab3c8b24a.jpeg' width='20%'>

<img src='https://user-images.githubusercontent.com/76121306/229055810-3c2b01a8-4924-48da-894f-d5cd71bdcb8b.jpeg' width='20%'>

<img src='https://user-images.githubusercontent.com/76121306/229055929-5a4f921a-ba82-4623-8e10-c1cb55d9e76c.jpeg' width='20%'>

<img src='https://user-images.githubusercontent.com/76121306/229056000-0eee8253-41a9-40eb-a35b-76906eabda79.jpeg' width='20%'>
</div>

<br>

[mburuanthony](https://github.com/mburuanthony)
