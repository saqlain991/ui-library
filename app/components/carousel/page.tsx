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
import { CarouselExample } from "./example";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { StackedCardsInteraction } from "@/components/ui/stacked-cards-interaction";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function CarouselPage() {
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
    commandRun: `npx shadcn@latest add "https://21st.dev/r/ibelick/infinite-slider"`,
    code: `import { InfiniteSlider } from "@/components/ui/infinite-slider";

function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse className="w-full h-full bg-white">
      <img
        src="https://motion-primitives.com/apple_music_logo.svg"
        alt="Apple Music logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/chrome_logo.svg"
        alt="Chrome logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/strava_logo.svg"
        alt="Strava logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/nintendo_logo.svg"
        alt="Nintendo logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/jquery_logo.svg"
        alt="Jquery logo"
        className="h-[120px] w-auto"
      />
      <img
        src="https://motion-primitives.com/prada_logo.svg"
        alt="Prada logo"
        className="h-[120px] w-auto"
      />
    </InfiniteSlider>
  );
}

function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider durationOnHover={75} gap={24}>
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
        alt="Dean blunt - Black Metal 2"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
        alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
        alt="Yung Lean - Stardust"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
        alt="Lana Del Rey - Ultraviolence"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
        alt="A$AP Rocky - Tailor Swif"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
        alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
        className="aspect-square w-[120px] rounded-[4px]"
      />
    </InfiniteSlider>
  );
}

function InfiniteSliderVertical() {
  return (
    <div className='flex h-[350px] space-x-4'>
      <InfiniteSlider direction='vertical'>
        <img
          src='https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
          alt='Dean blunt - Black Metal 2'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141'
          alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf'
          alt='Yung Lean - Stardust'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
          alt='Lana Del Rey - Ultraviolence'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288'
          alt='A$AP Rocky - Tailor Swif'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520'
          alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
          className='aspect-square w-[120px] rounded-[4px]'
        />
      </InfiniteSlider>
      <InfiniteSlider direction='vertical' reverse>
        <img
          src='https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645'
          alt='DAYS BEFORE RODEO - Travis Scott'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3'
          alt="You're in My System - TORYONTHEBEAT"
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e0234537499b159b0e6d18e5655'
          alt="You can't tell me - People Make the World Go Round"
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e020cd942c1a864afa4e92d04f2'
          alt='ye - Kanye West'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e02a875c3ec944b4f164ab5c350'
          alt='Slime Season 3 - Young Thug'
          className='aspect-square w-[120px] rounded-[4px]'
        />
        <img
          src='https://i.scdn.co/image/ab67616d00001e026376f0d88bbbc8cd051e3401'
          alt='SWAG - 8ruki'
          className='aspect-square w-[120px] rounded-[4px]'
        />
      </InfiniteSlider>
    </div>
  );
}

export default {
  InfiniteSliderBasic,
  InfiniteSliderHoverSpeed,
  InfiniteSliderVertical,
};

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
            <div className="w-full h-60 flex my- flex-col gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
              <InfiniteSlider durationOnHover={75} gap={24}>
                <img
                  src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
                  alt="Dean blunt - Black Metal 2"
                  className="aspect-square w-[120px] rounded-[4px]"
                />
                <img
                  src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
                  alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
                  className="aspect-square w-[120px] rounded-[4px]"
                />
                <img
                  src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
                  alt="Yung Lean - Stardust"
                  className="aspect-square w-[120px] rounded-[4px]"
                />
                <img
                  src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
                  alt="Lana Del Rey - Ultraviolence"
                  className="aspect-square w-[120px] rounded-[4px]"
                />
                <img
                  src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
                  alt="A$AP Rocky - Tailor Swif"
                  className="aspect-square w-[120px] rounded-[4px]"
                />
                <img
                  src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
                  alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
                  className="aspect-square w-[120px] rounded-[4px]"
                />
              </InfiniteSlider>
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
      {CarouselExample.map((example) => (
        <div key={example.id} className="space-y-4 p-4 rounded-lg ">
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
