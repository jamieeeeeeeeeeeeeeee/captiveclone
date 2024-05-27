# UoM_WiFi captive portal clone
- 🎨 This looks pretty much exactly like the original University of Manchester WiFi portal. 
- 🍓 I made it to run on my Raspberry Pi.
- 🚨 Please don't use this as it is illegal.
- 📝 It logs student credentials and doesn't actually give them access to the Internet :(

A "captive portal" is the login page that shows up when you need to sign-in to "free wifi" such as the University of Manchester's "UoM_WiFi" that is found across campus.

### Requirements
- A Linux OS, with WiFi AP capabilities (RPI and most computer devices have this)
- hostapd
- dnsmasq
- bun

### Installing
**Run** ```sudo apt update; sudo apt install hostapd dnsmasq; curl -fsSL https://bun.sh/install | bash```

Then clone and ```cd``` into this repo, and run ```./run.sh``` to turn your computer into a "rogue router", i.e. it will broadcast under the "UoM-WiFi" SSID, and will serve a duplicate capture portal, but will not actually provide internet and will instead steal any credentials sent through the form, by printing them, and writing them to a ```credentials.txt``` file.

Below is what the fake captive portal looks like.

![image](https://github.com/jamieeeeeeeeeeeeeeee/uomroguerouter/assets/107353607/cd6683a0-12e0-41b8-a181-37a31bcceed0)
