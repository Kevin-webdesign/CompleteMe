declare module "next/dist/lib/metadata/types/metadata-interface.js" {
  export interface Metadata {
    [key: string]: unknown;
  }

  export interface ResolvingMetadata {
    [key: string]: unknown;
  }

  export interface ResolvingViewport {
    [key: string]: unknown;
  }
}

declare module "next/dist/build/segment-config/app/app-segment-config.js" {
  export interface InstantConfigForTypeCheckInternal {
    [key: string]: unknown;
  }
}

declare module "next/types.js" {
  export interface Metadata {
    [key: string]: unknown;
  }

  export interface ResolvingMetadata {
    [key: string]: unknown;
  }

  export interface ResolvingViewport {
    [key: string]: unknown;
  }
}

declare module "next/link" {
  const Link: any;
  export default Link;
}

declare module "next/navigation" {
  export function useRouter(): any;
}
