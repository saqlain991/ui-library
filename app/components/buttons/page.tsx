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
import { ButtonExample } from "./example";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ButtonsPage() {
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

  const mainComponentCode = `
//Default Button
  import { Button } from "@/components/ui/button"

  export function ButtonDemo() {
    return <Button>Default</Button>
  }

//Secondary Button }
  <Button variant={secondary}>Secondary</Button>

//Destructive Button }
  <Button variant={destructive}>Destructive</Button>

//Ghost Button }
  <Button variant={ghost}>Ghost</Button>

//Link Button }
  <Button variant={link}>Link</Button>

//Icon Button }
  <Button variant={icon}>
    <ChevronRight />
  </Button>

//Text with Icon Button }
  <Button className="flex flex-row gap-1 text-sm font-normal">
    <MailOpen size={15} /> Login with Email
  </Button>

`;

  return (
    <div className="space-y-6">
      {/* Main Component Section */}
      {/* <h2 className="text-3xl font-semibold">Accordion Component</h2> */}
      <div className="space-y-4  p-4 rounded-lg ">
        <div className="flex justify-between gap-2">
          <p className="text-xl font-semibold">Shadcn Buttons</p>
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
                onClick={() => onCopy("main", mainComponentCode)}
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
              <pre className="p-4 bg-gray-900 text-white rounded-lg  max-h-96 whitespace-pre-wrap ">
                <ScrollArea className="h-96">
                  <code className="text-sm">{mainComponentCode}</code>
                  <ScrollBar />
                </ScrollArea>
              </pre>
            </div>
          ) : (
            <div className="w-full  flex flex-row gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="outline" size="icon">
                <ChevronRight />
              </Button>
              <Button className="flex flex-row gap-1 text-sm font-normal">
                <MailOpen size={15} /> Login with Email
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Examples Section */}
      <h2 className="text-3xl font-semibold">Examples</h2>
      {ButtonExample.map((example) => (
        <div key={example.id} className="space-y-4  p-4 rounded-lg ">
          <div className="flex justify-between gap-2">
            <h3 className="text-xl font-medium">{example.title}</h3>
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
                <pre className="p-4 bg-gray-900 text-white rounded-lg  max-h-96 whitespace-pre-wrap ">
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
        </div>
      ))}
    </div>
  );
}
