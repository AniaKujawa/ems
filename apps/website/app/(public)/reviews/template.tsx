"use client"

import { ReactNode, useEffect } from "react";

export default function Template({ children }: { children: ReactNode}) {

  useEffect(() => {
    //sending analytics events
  }, []);

  return <div>{children}</div>
}