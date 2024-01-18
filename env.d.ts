/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SQUARE_SANDBOX_APP_ID: string;
  readonly VITE_SQUARE_SANDBOX_ACCESS_TOKEN: string;
  readonly VITE_SQUARE_PRODUCTION_APP_ID: string;
  readonly VITE_SQUARE_PRODUCTION_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
