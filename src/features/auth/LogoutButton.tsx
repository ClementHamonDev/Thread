'use client';

import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { signOut } from 'next-auth/react';
import React from 'react'

export const LoginButton = () => {
    return (
      <Button
        onClick={() => {
          signOut();
        }}
      >
        <LogIn className="m-2 h-4 w-4" />
        Login
      </Button>
    );
  };
  