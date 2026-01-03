"use client";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

export function LivePreviewWrittenSection() {
    return (
        <div className="flex text-gray-300 justify-center items-center flex-col">

            <p className="mb-5">
                On{" "}
                <LinkPreview
                    url="https://unwritten-codeblogs.vercel.app/"
                    className="border-b font-semibold text-gray-200 hover:text-white"
                >
                    The Unwritten Code
                </LinkPreview>
                , I document the lessons behind the code—exploring frontend development,
                system design fundamentals, real-world project journeys, and practical
                engineering insights.
            </p>


        </div>
    );
}
