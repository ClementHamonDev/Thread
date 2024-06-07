'use client';

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import React from "react";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <Button
      onClick={() => {
        signIn();
      }}
    >
      <LogIn className="m-2 h-4 w-4" />
      Login
    </Button>
  );
};
