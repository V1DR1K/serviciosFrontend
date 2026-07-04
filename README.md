# ServiCerca Web

Cliente Angular 21 responsive basado en el prototipo Stitch y organizado con las convenciones de Kaza: `core`, `features` y `shared`, contratos tipados, servicios por dominio y componentes `.ts/.html/.scss` separados.

## Desarrollo

```powershell
npm install
npm start
```

El proxy de desarrollo dirige `/api`, `/oauth2` y `/ws` a `localhost:8080`. La ruta pública inicial es `/auth`, que renderiza aun cuando el backend esté apagado.

En este equipo Windows, Application Control bloquea binarios nativos nuevos de Rollup dentro de OneDrive. El proyecto fija Rollup `4.60.4`, la misma versión validada por Kaza. Si Windows vuelve a bloquearla, ejecutar el frontend mediante Docker evita esa restricción local.

## Diseño

Los tokens de `src/styles.css` provienen de `stitch_local_pro_match/proximity_trust_system/DESIGN.md`: Inter, azul de confianza, verde de match, grilla de 8 px, tarjetas de 16 px, sidebar desktop y barra inferior móvil. El viewport desactiva zoom conforme al requerimiento original.

MapLibre consume mosaicos públicos de OpenStreetMap en desarrollo. Antes de tráfico productivo se debe contratar o alojar un proveedor de tiles compatible y sustituir la URL, respetando atribución y política de uso.
