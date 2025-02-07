import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import React from "react";

const DocsPage = () => {
  //   const code1 = `npx shadcn@latest init`;
  //   const code2 = `npx shadcn@latest init -d`;
  //   const code3 = `
  // 1. Which style would you like to use? › New York
  // 2. Which color would you like to use as base color? › Zinc
  // 3. Which style would you like to use? › New York
  //   `;
  //   const code4 = `npx shadcn@latest add button`;

  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Installation </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="pt-5 ">
        <div className="flex flex-col mb-5">
          <h1 className="text-4xl font-bold">Installation </h1>
          <p className="text-muted-foreground">
            Full installation guide for the project it use the shadcn-ui library
            to create a beautiful UI components
          </p>
          <Separator className="my-4 w-2/4" />
        </div>
        {/* <div className="flex flex-col mb-5 ">
          <h1 className="text-4xl font-bold">Shadcn-Extension</h1>
          <p className="font-normal">
            A CLI (inspired by and meant to work with shadcn-ui) for adding
            components to your project, making it easier to integrate and manage
            UI components within your codebase.
          </p>
        </div> */}
        <div className="flex flex-col my-5  ">
          {/* <h1 className="text-4xl font-bold">Usage</h1> */}

          <h3 className="text-xl font-semibold mb-4">
            Initializing a New Project
          </h3>
          <p className="font-normal mb-5">
            To install the shadcn-ui library you can use the following command
            to initialize the project. Keep explore 🌍 and Keep code 🧑‍💻
          </p>
        </div>
        <div className="flex flex-col my-5 ">
          <h1 className="text-lg font-bold">1. Create project 🚀</h1>
          <p className="pl-4">
            Run the{" "}
            <span className="bg-slate-200 dark:bg-[#27272A] text-black dark:text-white  px-2  pb-[2px] rounded-sm">
              init
            </span>{" "}
            following command to initialize the project:
          </p>
          <div className="my-4">
            <pre className="bg-slate-200 dark:bg-neutral-900  text-black dark:text-white  p-4 rounded-md">
              <code>npx shadcn@latest init</code>
              <div>
                <span className="text-gray-400"># or</span>
              </div>
              <code>npx shadcn@latest init -d</code>
            </pre>
          </div>
        </div>
        <div className="flex flex-col my-5 ">
          <h1 className="text-lg font-bold">
            2. Configure components.json ⚙️{" "}
          </h1>
          <p className="pl-4">
            You will be asked a few questions to configure{" "}
            <span className="bg-slate-200 dark:bg-[#27272A] text-center text-black dark:text-white  px-2 pb-[2px] rounded-sm">
              components.json
            </span>
            :
          </p>
          <pre className="bg-slate-200 dark:bg-neutral-900  text-black dark:text-white  p-4 rounded-md mt-4">
            <ul>1. Which style would you like to use? › New York</ul>
            <ul>2. Which color would you like to use as base color? › Zinc</ul>
            <ul>3. Do you want to use CSS variables for colors? › no / yes</ul>
          </pre>
          <div className="my-4"></div>
        </div>
        <div className="flex flex-col my-5 ">
          <h1 className="text-lg font-bold">3. That&apos;s it 🎉</h1>
          <p className="pl-4">
            You can now start adding components to your project.{" "}
            <span className="bg-slate-200 dark:bg-[#27272A] text-center text-black dark:text-white  px-2 pb-[2px] rounded-sm">
              components.json
            </span>
            :
          </p>
          <div className="my-4">
            <p className="py-4">
              The command above will add the Button component to your project.
              You can then import it like this:
            </p>
            <pre className="bg-slate-200 dark:bg-neutral-900  text-black dark:text-white  p-4 rounded-md">
              <code>npx shadcn@latest add button</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
