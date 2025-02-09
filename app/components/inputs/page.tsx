"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronRight,
  Code,
  Copy,
  Eye,
  MailOpen,
  Terminal,
} from "lucide-react";
import { InputExample } from "./example";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Input } from "@/components/ui/input";

export default function InputPage() {
  const [showCode, setShowCode] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const toggleShowCode = (id: string) => {
    setShowCode((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const onCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopied((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [id]: false })), 2000);
  };

  const onCopyCommandRun = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied((prev) => ({ ...prev, [command]: true }));
    setTimeout(
      () => setCopied((prev) => ({ ...prev, [command]: false })),
      2000
    );
  };

  const mainComponent = {
    commandRun: `npx shadcn@latest add input`,
    code: `
    <div>
      <Input type="text" placeholder="Name" />{" "}
    </div>
    <div>
      <Input type="email" placeholder="Email" />{" "}
    </div>
    <div>
      <Input type="file" placeholder="File" />{" "}
    </div>
    <div>
      <Input type="password" placeholder="password" />{" "}
    </div>
`,
  };

  return (
    <div className="space-y-6">
      {/* Main Component Section */}
      <div className="space-y-4 p-4 rounded-lg ">
        <div className="flex justify-between gap-2">
          <p className="text-xl font-semibold">Infinite Slider </p>
          <div className="flex flex-row gap-2">
            <Button
              variant={showCode["main"] ? "outline" : "default"}
              size="sm"
              onClick={() => toggleShowCode("main")}
            >
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button
              variant={showCode["main"] ? "default" : "outline"}
              size="sm"
              onClick={() => toggleShowCode("main")}
            >
              <Code className="mr-2 h-4 w-4" />
              Code
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4">
          {showCode["main"] ? (
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="absolute right-4 top-4"
                onClick={() => onCopy("main", mainComponent.code)}
              >
                {copied["main"] ? (
                  <span className="flex items-center">
                    <Check className="h-4 w-4 mr-1" /> Copied!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Copy className="h-4 w-4 mr-1" /> Copy
                  </span>
                )}
              </Button>
              <pre className="p-4 bg-gray-900 text-white rounded-lg max-h-96 whitespace-pre-wrap ">
                <ScrollArea className="h-96">
                  <code className="text-sm">{mainComponent.code}</code>
                  <ScrollBar />
                </ScrollArea>
              </pre>
            </div>
          ) : (
            <div className="w-full h-36 flex  flex-row gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
              <div>
                <Input type="text" placeholder="Name" />{" "}
              </div>
              <div>
                <Input type="email" placeholder="Email" />{" "}
              </div>
              <div>
                <Input type="file" placeholder="File" />{" "}
              </div>
              <div>
                <Input type="password" placeholder="password" />{" "}
              </div>
            </div>
          )}
        </div>
        {/* Command run section */}
        <div className="flex flex-col md:flex-row justify-between items-center border p-4 rounded-lg gap-2">
          {/* Command Text - Prevent Overflow */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-hidden">
            <Terminal size={20} />
            <span className="truncate w-full text-sm font-mono break-all">
              {mainComponent.commandRun}
            </span>
          </div>

          {/* Copy Button - Fixed Width, No Shrinking */}
          <Button
            className="flex-shrink-0 min-w-fit"
            onClick={() => onCopyCommandRun(mainComponent.commandRun)}
          >
            {copied[mainComponent.commandRun] ? (
              <span className="flex items-center">
                <Check className="h-4 w-4 mr-1" /> Copied!
              </span>
            ) : (
              <span className="flex items-center">
                <Copy className="h-4 w-4 mr-1" /> Copy
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Examples Section */}
      <h2 className="text-3xl font-semibold">Examples</h2>
      {InputExample.map((example) => (
        <div key={example.id} className="space-y-4 p-4 rounded-lg ">
          <div className="flex justify-between gap-2">
            <h3 className="text-xl font-medium">{example.title} </h3>
            <div className="flex flex-row gap-2">
              <Button
                variant={showCode[example.id] ? "outline" : "default"}
                size="sm"
                onClick={() => toggleShowCode(example.id)}
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button
                variant={showCode[example.id] ? "default" : "outline"}
                size="sm"
                onClick={() => toggleShowCode(example.id)}
              >
                <Code className="mr-2 h-4 w-4" />
                Code
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4">
            {showCode[example.id] ? (
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-4"
                  onClick={() => onCopy(example.id, example.code)}
                >
                  {copied[example.id] ? (
                    <span className="flex items-center">
                      <Check className="h-4 w-4 mr-1" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Copy className="h-4 w-4 mr-1" /> Copy
                    </span>
                  )}
                </Button>
                <pre className="p-4 bg-gray-900 text-white rounded-lg max-h-96 whitespace-pre-wrap ">
                  <ScrollArea className="h-80">
                    <code className="text-sm">{example.code}</code>
                    <ScrollBar />
                  </ScrollArea>
                </pre>
              </div>
            ) : (
              <div className="p-4">{example.component}</div>
            )}
          </div>

          {/* Command run section */}
          <div className="flex flex-row justify-between items-center border p-4 rounded-lg">
            <span className="flex items-center gap-2">
              <Terminal size={20} />
              {example.commandRun}
            </span>
            <Button onClick={() => onCopyCommandRun(example.commandRun)}>
              {copied[example.commandRun] ? (
                <span className="flex items-center">
                  <Check className="h-4 w-4 mr-1" /> Copied!
                </span>
              ) : (
                <span className="flex items-center">
                  <Copy className="h-4 w-4 mr-1" /> Copy
                </span>
              )}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
