"use client";
import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Definieer de toegestane pagina's
const pages = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Curriculum vitae", path: "/cv" },
];

export function useRedirectIfNotAllowed() {
  const router = useRouter();

  useEffect(() => {
    // Haal het huidige pad op
    const currentPath = window.location.pathname;

    // Controleer of het huidige pad overeenkomt met een toegestane pagina
    const isAllowedPage = pages.some(page => page.path === currentPath);

    // Als het pad niet toegestaan is, redirect naar de homepage
    if (!isAllowedPage) {
      router.push('/');
    }
  }, [router]);
}