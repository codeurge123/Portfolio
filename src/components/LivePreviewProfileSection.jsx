"use client";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

export function LinkPreviewProfileSection() {
  return (
    <div className="flex text-gray-300 justify-center items-center flex-col">

      {/* About */}
      <p className="mb-6 ">
        I specialize in building modern web applications with a strong focus on
        frontend architecture, performance, and maintainability, while also
        being comfortable across the full stack.
      </p>

      {/* Open Source */}
      <p className="mb-6">
        I build and maintain open-source npm packages such as{" "}
        <LinkPreview
          url="https://www.npmjs.com/package/theme-switcher-bundler"
          className="border-b font-semibold"
        >
          theme-switcher-bundler
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://www.npmjs.com/package/leetcode-heatmap-track"
          className="border-b font-semibold"
        >
          leetcode-heatmap-track
        </LinkPreview>
        , focusing on developer experience and practical real-world use cases.
      </p>

    </div>
  );
}
