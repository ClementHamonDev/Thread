"use client";

import clsx from "clsx";
import { Loader2 } from "lucide-react";
import React from "react";

export const Loader = ({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <Loader2 className={clsx("animate-spin", className)} size={size}></Loader2>
  );
};
