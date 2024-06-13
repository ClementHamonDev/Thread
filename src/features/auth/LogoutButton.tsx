'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Loader } from '@/components/ui/loader';
import { LogIn, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import React, { useTransition } from 'react'

export const DropdownItemLogout = () => {
  const [isPending, setIsPending] = useTransition();
  return (
    <DropdownMenuItem
      onClick={() => {
        signOut();
      }}
    >
      {isPending ? (
        <Loader className="mr-2" />
      ) : (
        <LogOut className="mr-2 h-4 w-4" />
      )}
      Logout
    </DropdownMenuItem>
  );
};
  