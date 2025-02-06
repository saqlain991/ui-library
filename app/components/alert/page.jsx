"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  Code,
  Copy,
  Eye,
  OctagonX,
  PartyPopper,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function AlertDemo() {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const codeString = `import { Terminal } from "lucide-react"

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

  const onCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4 mb-5">
      <div className="flex justify-end gap-2">
        <Button
          variant={showCode ? "outline" : "default"}
          size="sm"
          onClick={() => setShowCode(false)}
        >
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>
        <Button
          variant={showCode ? "default" : "outline"}
          size="sm"
          onClick={() => setShowCode(true)}
        >
          <Code className="mr-2 h-4 w-4" />
          Code
        </Button>
      </div>

      <div className="rounded-lg border bg-card">
        <ScrollArea>
          {showCode ? (
            <div className="relative">
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-4"
                onClick={onCopy}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <pre className="p-4">
                <code className="text-sm">{codeString}</code>
              </pre>
            </div>
          ) : (
            <div className="p-6 ">
              <div className="mb-4">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="mb-4">
                <Alert>
                  {/* <Terminal className="h-4 w-4" /> */}
                  <ShieldAlert className="h-4 w-4 " color="#FFCC00" />
                  <AlertTitle>Warning !</AlertTitle>
                  <AlertDescription>
                    You are about to delete all your data.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="mb-4">
                <Alert>
                  {/* <Terminal className="h-4 w-4" /> */}
                  <OctagonX className="h-4 w-4 " color="#CC3300" />
                  <AlertTitle>Error </AlertTitle>
                  <AlertDescription>
                    You are about to delete all your data.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="mb-4">
                <Alert>
                  {/* <Terminal className="h-4 w-4" /> */}
                  <PartyPopper className="h-4 w-4" color="#1dc9c6" />
                  <AlertTitle>Congratulation !</AlertTitle>
                  <AlertDescription>
                    You have successfully deployed your app.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          )}
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </div>
  );
}
