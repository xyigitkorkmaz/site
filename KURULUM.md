# Rota Rehberi — Kurulum

> Bu klasörü bir GitHub deposuna yükle. `_gitignore` ve `_dockerignore` dosyalarının
> adını `.gitignore` ve `.dockerignore` yap (başındaki `_` yerine `.`).

## Render
1. render.com → New → Web Service → GitHub deposunu seç (render.yaml otomatik okunur).
2. Build: `npm install` · Start: `node server.js`
3. Environment sekmesinde **TOMTOM_KEY** değişkenine TomTom API anahtarını yaz.
4. Settings → Custom Domains → alan adını ekle, Render'ın verdiği DNS kaydını sağlayıcıya gir.
5. TomTom panelinde anahtarı sadece kendi alan adına izinli yap.

## VDS
```
npm install
TOMTOM_KEY=anahtarin PORT=8788 node server.js
pm2 start server.js --name rota   # kalıcı çalışma
```
Nginx ters proxy + certbot ile https ver (GPS için https şart).

## Yerel
```
npm install
set TOMTOM_KEY=anahtarin   (Linux/Mac: export TOMTOM_KEY=anahtarin)
node server.js
```
http://localhost:8788

## Yapı
```
server.js · package.json · Dockerfile · render.yaml
public/index.html   → uygulamanın kendisi
```
