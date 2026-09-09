"use client";

import { useState, useRef, useCallback } from "react";
import { upload } from "@vercel/blob/client";
import { Button } from "@/components/ui/button";
import { UploadCloud, Copy, Check, ImageIcon, Loader2, X } from "lucide-react";

type UploadedItem = {
  id: string;
  name: string;
  status: "uploading" | "done" | "error";
  url?: string;
  error?: string;
  previewUrl: string;
};

export default function UploadPage() {
  const [items, setItems] = useState<UploadedItem[]>([]);
  const [dragging, setDragging] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);

    for (const file of fileArray) {
      const id = crypto.randomUUID();
      const previewUrl = URL.createObjectURL(file);

      setItems((prev) => [
        ...prev,
        { id, name: file.name, status: "uploading", previewUrl },
      ]);

      try {
        const blob = await upload(file.name, file, {
          access: "public",
          handleUploadUrl: "/api/upload",
        });

        setItems((prev) =>
          prev.map((it) =>
            it.id === id ? { ...it, status: "done", url: blob.url } : it,
          ),
        );
      } catch (err) {
        setItems((prev) =>
          prev.map((it) =>
            it.id === id
              ? { ...it, status: "error", error: (err as Error).message }
              : it,
          ),
        );
      }
    }
  }, []);

  const copyUrl = async (id: string, url: string) => {
    await navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const doneUrls = items.filter((it) => it.status === "done").map((it) => it.url!);

  const copyAll = async () => {
    if (doneUrls.length === 0) return;
    await navigator.clipboard.writeText(doneUrls.join("\n"));
    setCopiedId("ALL");
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1F2937]">Upload Project Photos</h1>
        <p className="mt-2 text-gray-600 leading-relaxed">
          Drop your photos here. Each one uploads to your site&apos;s storage and gives
          you a link. When they&apos;re done, click <strong>Copy all links</strong> and
          paste them to me in the chat with your project description.
        </p>
      </div>

      {/* Dropzone */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={`flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-12 text-center transition-colors ${
          dragging
            ? "border-[#7ED321] bg-[#7ED321]/5"
            : "border-gray-300 hover:border-[#7ED321] hover:bg-gray-50"
        }`}
      >
        <UploadCloud className="h-10 w-10 text-[#7ED321]" />
        <span className="text-lg font-semibold text-[#1F2937]">
          Tap to choose photos or drag them here
        </span>
        <span className="text-sm text-gray-500">
          JPG, PNG, WEBP, or HEIC — from your phone or computer
        </span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="sr-only"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* Copy all */}
      {doneUrls.length > 0 && (
        <div className="mt-6 flex items-center justify-between rounded-lg bg-[#1F2937] px-4 py-3 text-white">
          <span className="text-sm font-medium">
            {doneUrls.length} photo{doneUrls.length > 1 ? "s" : ""} ready
          </span>
          <Button
            onClick={copyAll}
            className="bg-[#7ED321] text-[#1F2937] hover:bg-[#6BC00F]"
          >
            {copiedId === "ALL" ? (
              <>
                <Check className="mr-2 h-4 w-4" /> Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" /> Copy all links
              </>
            )}
          </Button>
        </div>
      )}

      {/* Uploaded items */}
      {items.length > 0 && (
        <ul className="mt-6 space-y-3">
          {items.map((it) => (
            <li
              key={it.id}
              className="flex items-center gap-4 rounded-lg border border-gray-200 p-3"
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={it.previewUrl || "/placeholder.svg"}
                  alt={it.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[#1F2937]">{it.name}</p>
                {it.status === "uploading" && (
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    <Loader2 className="h-3 w-3 animate-spin" /> Uploading…
                  </p>
                )}
                {it.status === "done" && (
                  <p className="truncate text-xs text-gray-500">{it.url}</p>
                )}
                {it.status === "error" && (
                  <p className="text-xs text-red-600">Failed: {it.error}</p>
                )}
              </div>

              {it.status === "done" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyUrl(it.id, it.url!)}
                >
                  {copiedId === it.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              )}

              <button
                type="button"
                onClick={() => removeItem(it.id)}
                className="text-gray-400 hover:text-gray-600"
                aria-label={`Remove ${it.name}`}
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {items.length === 0 && (
        <div className="mt-10 flex flex-col items-center gap-2 text-gray-400">
          <ImageIcon className="h-8 w-8" />
          <p className="text-sm">No photos uploaded yet</p>
        </div>
      )}
    </div>
  );
}
