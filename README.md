# Mining Dashboard — Prueba Técnica

Dashboard de análisis de producción minera construido con **React + TypeScript + Vite + Tailwind CSS v4**.

## Requisitos

- Node.js **18+**
- npm o pnpm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Comandos disponibles

| Comando           | Descripción                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Servidor de desarrollo con HMR |
| `npm run build`   | Build de producción            |
| `npm run preview` | Vista previa del build         |
| `npm run lint`    | Análisis estático con ESLint   |

## Estructura del proyecto

```
src/
├── assets/          # Datos JSON (productionact.json, productionprev.json)
├── components/      # Componentes React
├── hooks/           # Custom hooks (useProductionData)
└── types/           # Tipos TypeScript
```

## Path aliases

El proyecto usa aliases `@zero/*` para imports más limpios:

```ts
import { useProductionData } from "@zero/hooks/useProductionData";
import { InsightNote } from "@zero/components/InsightNote";
```
