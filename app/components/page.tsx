"use client";

import Link from "next/link";
import { components } from "./layout";

export default function ComponentsPage() {
  return (
    <div className="container ">
      <div className=" max-w-5xl">
        <p className="mb-8 text-muted-foreground">
          Browse through our collection of beautifully crafted UI components.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-10">
          {components.map((component) => (
            <Link
              key={component.href}
              href={component.href}
              className="group relative rounded-lg border p-6 hover:bg-muted"
            >
              <h3 className="font-semibold">{component.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
