"use client";

import PreviewModel from "@/components/PreviewModel";
import React, { useEffect, useState } from "react";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModel />
    </>
  );
};

export default ModelProvider;
