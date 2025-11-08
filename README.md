This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Despliegue en Vercel

Sigue estos pasos para desplegar este proyecto en Vercel:

1) Requisitos
- Node.js 18.18 o superior (Vercel ya lo usa por defecto).
- Repositorio en GitHub/GitLab/Bitbucket con este código.

2) Build local (opcional pero recomendado)
```powershell
npm ci
npm run build
npm start
```
Abre http://localhost:3000 para verificar que la build es correcta.

3) Importar en Vercel
- Ve a https://vercel.com/new y selecciona el repo.
- Framework Preset: Next.js (detección automática).
- Build Command: `next build` (por defecto).
- Output: gestionado automáticamente por Vercel para Next.js.
- Variables de entorno: no se requieren actualmente.

4) Notas de configuración
- Se activó `eslint.ignoreDuringBuilds` en `next.config.ts` para que las builds no fallen por errores de ESLint mientras iteras. Recomendado: ejecutar `npm run lint` y corregir advertencias/errores con calma.
- Tailwind CSS v4 ya está configurado en `app/globals.css` y `tailwind.config.ts`.
- Si usas imágenes remotas, define dominios/`remotePatterns` en `next.config.ts` (sección `images`). No es necesario si sólo usas imágenes locales en `public/`.

5) Dominio y producción
- Después del primer deploy, asigna un dominio (opcional) en el Dashboard de Vercel.
- Los nuevos pushes a la rama configurada dispararán deploys automáticos.

Referencias:
- Docs de despliegue Next.js: https://nextjs.org/docs/app/building-your-application/deploying
- Dashboard de Vercel: https://vercel.com/dashboard
