"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Code, Copy, Eye, Terminal } from "lucide-react";
import { AlertExample } from "./example";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AccordionDemoPage() {
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
  import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}

`;

  return (
    <div className="space-y-6">
      {/* Main Component Section */}
      {/* <h2 className="text-3xl font-semibold">Accordion Component</h2> */}
      <div className="space-y-4  p-4 rounded-lg ">
        <div className="flex justify-end gap-2">
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
              <pre className="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto">
                <code className="text-sm">{mainComponentCode}</code>
              </pre>
            </div>
          ) : (
            <div className="p-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      </div>

      {/* Examples Section */}
      <h2 className="text-3xl font-semibold">Examples</h2>
      {AlertExample.map((example) => (
        <div key={example.id} className="space-y-4  p-4 rounded-lg ">
          <h3 className="text-xl font-medium">{example.title}</h3>
          <div className="flex justify-end gap-2">
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
                <pre className="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto">
                  <code className="text-sm">{example.code}</code>
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
