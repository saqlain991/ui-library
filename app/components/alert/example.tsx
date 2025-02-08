import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, PartyPopper, Terminal } from "lucide-react";

export const AlertExample = [
  {
    id: "default",
    title: "Default",
    component: (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    ),
    code: `import { Terminal } from "lucide-react"

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
    " `,
  },
  {
    id: "example2",
    title: "Success",
    component: (
      <Alert className="border border-[#5cb85c57] ">
        <PartyPopper className="h-4 w-4" color="#5cb85c" />
        <AlertTitle className="text-[#5cb85c]">
          {" "}
          Profile Updated Successfully.
        </AlertTitle>
        <AlertDescription className="font-light text-xs">
          Your profile has been updated successfully.
        </AlertDescription>
      </Alert>
    ),
    code: `import { PartyPopper } from "lucide-react"

    import {
    Alert,
    AlertDescription,
    AlertTitle,
    } from "@/components/ui/alert"

    export function AlertDestructive() {
    return (
        <Alert className="border border-[#5cb85c] ">
        <PartyPopper className="h-4 w-4" color="#5cb85c" />
        <AlertTitle className="text-[#5cb85c]">
          {" "}
          Profile Updated Successfully.
        </AlertTitle>
        <AlertDescription className="font-light text-xs">
          Your profile has been updated successfully.
        </AlertDescription>
      </Alert>
    )
    } `,
  },
  {
    id: "example3",
    title: "Warning",
    component: (
      <Alert title="Warning" variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    ),
    code: `import { AlertCircle } from "lucide-react"

    import {
    Alert,
    AlertDescription,
    AlertTitle,
    } from "@/components/ui/alert"

    export function AlertDestructive() {
    return (
        <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
            Your session has expired. Please log in again.
        </AlertDescription>
        </Alert>
    )
    }
    `,
  },
];
