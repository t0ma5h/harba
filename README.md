# Harba application demo

<img width="286" alt="image" src="https://user-images.githubusercontent.com/55575853/177132683-943612c0-7643-4d7d-bfaa-1915a3f0509a.png"><img width="287" alt="image" src="https://user-images.githubusercontent.com/55575853/177133544-d24cd437-a812-490d-8f2a-6469e39464e0.png"><img width="288" alt="image" src="https://user-images.githubusercontent.com/55575853/177134219-c53ab0a8-0dd7-48ef-9935-ace81e6a5eb6.png">

## Setup and launch 🧰
- Clone or Fork the repo
- Run ``yarn install`` inside root directory
- Run ``expo start``
- That's it!



## Current issues 🛠️
The app runs better on iOS, didn't have enough time to optimize for android that much 😄 
Also I removec custom markers due to performance issues on Android. There commented code inside ``Map.tsx``.
Aaand didn't have time for tests, although jest is added as a dependancy 😃. Can show my own test code on request.
### API 

## The images provided by the API no longer exist, e.g.: 
 - https://harba.co/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/harbor/image/4f857c03-7d0b-a48d-ed0c-e622cc1093d9_app.jpg does not display ✖️
 - https://harba.co/wp-content/uploads/harbor/image/4f857c03-7d0b-a48d-ed0c-e622cc1093d9_app.jpg does not display either ✖️

For demo reasons, three images have been stubbed into the code ✔️

### Libraries
Some libraries are currently throwing warining because of outdated stuff, which can be updated in the future. These libraries are:

 - ``react-native-snap-carousel``
    - Uses ``borderRadius`` without specifying units
    - Uses ``ViewPropTypes`` which will be deprecated later according to react.
 - ``expo-fast-image``
    - Cannot find a declaration file for module ``expo-fast-image``.
    - Logs some redundant errors.
 - ``OpenWeather``
    - The api key didn't become active for a long time, so I used ``open-meteo`` instead
