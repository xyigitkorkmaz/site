// Rota Rehberi - Node.js sunucusu
// Statik dosyaları sunar; TomTom anahtarını ortam değişkeninden (TOMTOM_KEY) okuyup
// /config.js ile sayfaya verir, böylece anahtar GitHub'a yüklenmez.
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8788;
const app = express();
app.set("trust proxy", 1);

app.get("/config.js", (req, res) => {
  res.set("Content-Type", "application/javascript; charset=utf-8");
  res.set("Cache-Control", "no-store");
  res.send(`window.TTKEY=${JSON.stringify(process.env.TOMTOM_KEY || "")};`);
});

app.get("/healthz", (req, res) => res.send("ok"));
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1h" }));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Rota Rehberi çalışıyor: http://0.0.0.0:${PORT}`);
  if (!process.env.TOMTOM_KEY) console.warn("TOMTOM_KEY tanımlı değil: TomTom harita/trafik/arama çalışmaz.");
});
