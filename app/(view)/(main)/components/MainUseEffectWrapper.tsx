"use client"

import { useAuth } from "@/app/components/AuthProvider";
import { useAppRouter } from "@/app/hooks/useAppRouter";
import { ReactNode, useEffect } from "react"

export const MainUseEffectWrapper: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();
  const router = useAppRouter();

  useEffect(() => {
    if (!isLoggedIn) router.navigateToLogin();
  }, [])

  return (
    <>{isLoggedIn ? children : undefined}</>
  )
}