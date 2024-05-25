# UoM_WiFi captive portal clone
- 🎨 This looks pretty much exactly like the original University of Manchester WiFi portal. 
- 🍓 I made it to run on my Raspberry Pi.
- 🚨 Please don't use this as it is illegal.
- 📝 It logs student credentials and doesn't actually give them access to the Internet :(

A "captive portal" is the login page that shows up when you need to sign-in to "free wifi" such as the University of Manchester's "UoM_WiFi" that is found across campus.

Installing ```hostapd``` and ```bun```, and then cloning this repo and running ```./run.sh``` will turn a Raspberry Pi into a "rogue router", i.e. it will broadcast under the "UoM_WiFi" SSID, and will serve a duplicate capture portal, but will not actually provide internet and will instead steal any credentials sent through the form.
