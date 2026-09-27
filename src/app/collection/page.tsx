import React from "react";
import { getAllMotorcycles } from "./actions";
import { authClient } from "@/lib/auth-client";
import MotorcycleEmptyState from "./_components/EmptyState";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";

export default async function page() {
  const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user)
    {
        return null}
  const motorcycles = await getAllMotorcycles(session?.user?.id);

  return ( <div>
    {motorcycles.length === 0 ? <MotorcycleEmptyState/> : <div><h1>sind da </h1> </div>}
    
  </div>);
}
