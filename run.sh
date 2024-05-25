sudo ifconfig wlan0 down;
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000;
sudo dnsmasq -C ./dnsmasq.conf;
sudo hostapd -B ./hostapd.conf;
sudo ifconfig wlan0 up;
sudo ifconfig wlan0 192.168.1.1/3000;
bun index.js;
