import DocsCard from "@/components/DocsCard";
import { Separator } from "@/components/ui/separator";
import React from "react";

const IntroductionPage = () => {
  return (
    <div>
      <div className="pt-5">
        <div className="flex flex-col mb-5">
          <h1 className="text-4xl font-bold">Introduction</h1>
          <p className="text-muted-foreground">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </p>
          <Separator className="my-4 w-3/5" />
        </div>

        <div className="flex flex-col my-5">
          <h1 className="text-lg font-bold">
            If you don&apos;t know Shadcn UI:
          </h1>
          <ol>
            Then my friend, you are missing a lot of things. Shadcn UI is a free
            & open-source component library for React that helps you build a
            beautiful UI for your applications. It provides a set of accessible,
            reusable, and composable React components that make it easy to
            create a beautiful UI for your applications.
          </ol>
        </div>

        <div className="flex flex-col mt-10">
          <h1 className="text-lg font-bold">Here are the best UI libraries:</h1>

          {/* Flexbox container with responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5">
            <DocsCard
              title="Shadcn UI"
              links="https://ui.shadcn.com/"
              image="/assets/ui-icon/shadcn.png"
            >
              Beautifully designed components that you can copy and paste into
              your apps. Made with Tailwind CSS. Open source.
            </DocsCard>
            <DocsCard
              title="Acternity UI"
              links="https://ui.aceternity.com/"
              image="/assets/ui-icon/acternity.png"
            >
              Make your websites look 10x beautiful
            </DocsCard>
            <DocsCard
              title="21st Dev "
              links="https://21.dev"
              image="/assets/ui-icon/21st-dev.png"
            >
              21st dev is a collection of components, tools, and hooks library
              for React, Next and many more.
            </DocsCard>
            <DocsCard
              title="Cui Cui UI"
              links="https://cuicui.day/"
              image="/assets/ui-icon/cuicui.png"
            >
              Cuicui is a collection of components, tools, and hooks that are
              designed to be simple, customizable and educational.
            </DocsCard>
            <DocsCard
              title="Cult UI"
              links="https://www.cult-ui.com/"
              image="/assets/ui-icon/cult-ui.png"
            >
              Ready-to-use components for your react apps. Shadcn compatible.
              Styled with tailwindcss.
            </DocsCard>
            <DocsCard
              title="Park UI"
              links="https://park-ui.com/"
              image="/assets/ui-icon/park-ui.png"
            >
              Beautifully designed components built with Ark UI and Panda CSS
              that work with a variety of JS frameworks.
            </DocsCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
