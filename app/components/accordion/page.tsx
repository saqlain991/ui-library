"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Code, Copy, Eye } from "lucide-react";
import { accordionExamples } from "./example";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>Yes. It comes with default styles that match your theme.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
  </AccordionItem>
</Accordion>
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
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match your theme.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Its animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </div>

      {/* Examples Section */}
      <h2 className="text-3xl font-semibold">Examples</h2>
      {accordionExamples.map((example) => (
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
