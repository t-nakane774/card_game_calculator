"use client"
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    redirect("./login")
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" />
  );
}