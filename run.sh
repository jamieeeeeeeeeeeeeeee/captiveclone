if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

ifconfig wlan0 down;
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000`;
dnsmasq -C ./dnsmasq.conf`;
hostapd -B ./hostapd.conf`;
ifconfig wlan0 up;
ifconfig wlan0 192.168.1.1/3000;
bun index.js;