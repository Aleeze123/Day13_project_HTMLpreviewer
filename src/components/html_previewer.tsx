"use client";

import React, { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { predefinedHtml } from "./predefinedHtml";

export default function HTMLPreview() {
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [previewHtml, setPreviewHtml] = useState<string>("");

  const handlePreview = (): void => {
    setPreviewHtml(htmlCode);
  };

  const handlePasteHtml = (): void => {
    setHtmlCode(predefinedHtml);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setHtmlCode(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white">
      <div className="w-full max-w-2xl p-8 rounded-lg shadow-lg bg-transparent text-black">
        <h1 className="text-3xl font-bold mb-4 text-center">HTML Previewer</h1>
        <p className="mb-4 text-center">
          Enter your HTML code and see the preview.
        </p>
        <div className="grid gap-4">
          <Textarea
            value={htmlCode}
            onChange={handleChange}
            placeholder="Enter your HTML code here..."
            className="p-4 rounded-lg border border-gray-300"
            rows={8}
          />
          <div className="flex justify-center">
            <div className="flex gap-4">
              <Button onClick={handlePreview}>Generate Preview</Button>
              <Button onClick={handlePasteHtml}>Paste HTML</Button>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-gray-300 bg-gray-100">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
        </div>
      </div>
    </div>
  );
}
