# FoldForever Landing Page

This project contains a simple landing page for a protein folding application. It is built with **Next.js** and **Tailwind CSS** and can be deployed to services such as Azure Static Web Apps or Azure App Service.

## Development

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Building for Production

Generate an optimized production build:

```bash
npm run build
```

Start the production server locally with:

```bash
npm start
```

## Deploying to Azure

1. **Azure Static Web Apps** – create a new Static Web App in the Azure portal and connect it to this repository. Use the following build configuration:

   - **App location:** `/`
   - **Output location:** `/.next`

2. **Azure App Service** – create a Node.js App Service and deploy with GitHub Actions or the Azure CLI. Run `npm run build` during deployment and start the app with `npm start`.

For more information, see the [Azure Static Web Apps documentation](https://learn.microsoft.com/azure/static-web-apps/) or the [Azure App Service documentation](https://learn.microsoft.com/azure/app-service/).
