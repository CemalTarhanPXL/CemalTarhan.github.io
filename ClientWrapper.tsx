"use client";

import { useRedirectIfNotAllowed } from './lib/useRedirectIfNotAllowed';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useRedirectIfNotAllowed();
  return <>{children}</>;
}