/// <reference types="vite/client" />

// Image declarations for TypeScript
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// Allow importing of JSON files
declare module '*.json' {
  const value: Record<string, unknown>;
  export default value;
}

// Additional Vite environment types
interface ImportMetaEnv extends Readonly<Record<string, string | boolean | undefined>> {
  readonly VITE_APP_TITLE?: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
}