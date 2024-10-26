"use client"

import { useRouter } from "next/navigation";

export const useAppRouter = () => {
  const router = useRouter();
  //navigation

  const handleGoBack = () => {
    router.back();
  }

  const navigateToLogin = () => {
    router.push('/login');
  }

  const navigateToChart = () => {
    router.push('/chart');
  }

  return {
    handleGoBack,
    navigateToLogin,
    navigateToChart,
  }
}