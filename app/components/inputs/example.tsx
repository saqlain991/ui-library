import { ActionSearchBar } from "@/components/ActionSearchBar";
import { AIVoiceInputDemo } from "@/components/ai-voice-inputDemo";
import { InputWithEnd } from "@/components/Input-with-end";
import { InputWithIconButton } from "@/components/input-with-iconButton";
import { InputWithPasswordIndicator } from "@/components/Input-with-Password-Indicator";
import { InputWithStart } from "@/components/Input-with-start";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export const InputExample = [
  {
    id: "example1",
    title: "Input with Icon Button",
    commandRun: 'npx shadcn@latest add "https://21st.dev/r/originui/input"',
    component: (
      <div className="w-full h-32 flex  gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8   ">
        <InputWithIconButton />
      </div>
    ),
    code: `
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Download } from "lucide-react";
  import { useId } from "react";

  function InputWithIconButton() {
    const id = useId();
    return (
      <div className="space-y-2 min-w-[300px]">
        <Label htmlFor={id}>Input with end icon button</Label>
        <div className="flex rounded-lg shadow-sm shadow-black/5">
          <Input
            id={id}
            className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
            placeholder="Email"
            type="email"
          />
          <button
            className="inline-flex w-9 items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Subscribe"
          >
            <Download size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }

  export { InputWithIconButton };
  `,
  },
  {
    id: "example2",
    title: " Action Search Bar",
    commandRun:
      'npx shadcn@latest add "https://21st.dev/r/kokonutd/action-search-bar"',
    component: (
      <div className=" flex gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <ActionSearchBar />
      </div>
    ),
    code: `
  import { ActionSearchBar } from "@/components/ui/action-search-bar"
  import {
      BarChart2,
      Globe,
      Video,
      PlaneTakeoff,
      AudioLines,
  } from "lucide-react";


  function actionSearchBarDemo() {

      const allActions = [
      {
          id: "1",
          label: "Book tickets",
          icon: <PlaneTakeoff className="h-4 w-4 text-blue-500" />,
          description: "Operator",
          short: "⌘K",
          end: "Agent",
      },
      {
          id: "2",
          label: "Summarize",
          icon: <BarChart2 className="h-4 w-4 text-orange-500" />,
          description: "gpt-4o",
          short: "⌘cmd+p",
          end: "Command",
      },
      {
          id: "3",
          label: "Screen Studio",
          icon: <Video className="h-4 w-4 text-purple-500" />,
          description: "gpt-4o",
          short: "",
          end: "Application",
      },
      {
          id: "4",
          label: "Talk to Jarvis",
          icon: <AudioLines className="h-4 w-4 text-green-500" />,
          description: "gpt-4o voice",
          short: "",
          end: "Active",
      },
      {
          id: "5",
          label: "Translate",
          icon: <Globe className="h-4 w-4 text-blue-500" />,
          description: "gpt-4o",
          short: "",
          end: "Command",
      },
  ];

      return <ActionSearchBar actions={allActions} />
  }

  export { actionSearchBarDemo }
  `,
  },
  {
    id: "example4",
    title: "Input Start Select",
    commandRun: 'npx shadcn@latest add "https://21st.dev/r/originui/input"',
    component: (
      <div className=" h-32 flex gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InputWithStart />
      </div>
    ),
    code: `
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { ChevronDown } from "lucide-react";
  import { useId } from "react";

  function InputWithStart() {
    const id = useId();
    return (
      <div className="space-y-2 min-w-[300px]">
        <Label htmlFor={id}>Input with start select</Label>
        <div className="flex rounded-lg shadow-sm shadow-black/5">
          <div className="relative">
            <select
              className="peer inline-flex h-full appearance-none items-center rounded-none rounded-s-lg border border-input bg-background pe-8 ps-3 text-sm text-muted-foreground transition-shadow hover:bg-accent hover:text-accent-foreground focus:z-10 focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Protocol"
            >
              <option value="https://">https://</option>
              <option value="http://">http://</option>
              <option value="ftp://">ftp://</option>
              <option value="sftp://">sftp://</option>
              <option value="ws://">ws://</option>
              <option value="wss://">wss://</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 end-0 z-10 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50">
              <ChevronDown
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                role="img"
              />
            </span>
          </div>
          <Input
            id={id}
            className="-ms-px rounded-s-none shadow-none focus-visible:z-10"
            placeholder="192.168.1.1"
            type="text"
          />
        </div>
      </div>
    );
  }

  export { InputWithStart };

  `,
  },
  {
    id: "example3",
    title: " Input End Select",
    commandRun: 'npx shadcn@latest add "https://21st.dev/r/originui/input"',
    component: (
      <div className="h-32 flex gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InputWithEnd />
      </div>
    ),
    code: `
  import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { useId } from "react";

function InputWithEnd() {
  const id = useId();
  return (
    <div className="space-y-2 min-w-[300px]">
      <Label htmlFor={id}>Input with end select</Label>
      <div className="flex rounded-lg shadow-sm shadow-black/5">
        <Input
          id={id}
          className="-me-px rounded-e-none shadow-none focus-visible:z-10"
          placeholder="google"
          type="text"
        />
        <div className="relative inline-flex">
          <select
            className="peer inline-flex h-full appearance-none items-center rounded-none rounded-e-lg border border-input bg-background pe-8 ps-3 text-sm text-muted-foreground transition-shadow hover:bg-accent hover:text-accent-foreground focus:z-10 focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Domain suffix"
          >
            <option>.com</option>
            <option>.org</option>
            <option>.net</option>
          </select>
          <span className="pointer-events-none absolute inset-y-0 end-0 z-10 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50">
            <ChevronDown
              size={16}
              strokeWidth={2}
              aria-hidden="true"
              role="img"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export { InputWithEnd };

  `,
  },
  {
    id: "example5",
    title: "Input with Password Strength Indicator",
    commandRun: 'npx shadcn@latest add "https://21st.dev/r/originui/input"',
    component: (
      <div className="flex gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <InputWithPasswordIndicator />
      </div>
    ),
    code: `
    "use client";
  
    import { Input } from "@/components/ui/input";
    import { Label } from "@/components/ui/label";
    import { Check, Eye, EyeOff, X } from "lucide-react";
    import { useId, useMemo, useState } from "react";
  
    function InputWithPasswordIndicator() {
      const id = useId();
      const [password, setPassword] = useState("");
      const [isVisible, setIsVisible] = useState<boolean>(false);
  
      const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  
      const checkStrength = (pass: string) => {
        const requirements = [
          { regex: /.{8,}/, text: "At least 8 characters" },
          { regex: /[0-9]/, text: "At least 1 number" },
          { regex: /[a-z]/, text: "At least 1 lowercase letter" },
          { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
        ];
  
        return requirements.map((req) => ({
          met: req.regex.test(pass),
          text: req.text,
        }));
      };
  
      const strength = checkStrength(password);
  
      const strengthScore = useMemo(() => {
        return strength.filter((req) => req.met).length;
      }, [strength]);
  
      const getStrengthColor = (score: number) => {
        if (score === 0) return "bg-border";
        if (score <= 1) return "bg-red-500";
        if (score <= 2) return "bg-orange-500";
        if (score === 3) return "bg-amber-500";
        return "bg-emerald-500";
      };
  
      const getStrengthText = (score: number) => {
        if (score === 0) return "Enter a password";
        if (score <= 2) return "Weak password";
        if (score === 3) return "Medium password";
        return "Strong password";
      };
  
      return (
        <div className="min-w-[300px]">
          <div className="space-y-2">
            <Label htmlFor={id}>Input with password strength indicator</Label>
            <div className="relative">
              <Input
                id={id}
                className="pe-9"
                placeholder="Password"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={strengthScore < 4}
                aria-describedby={\`\${id}-description\`}
              />
              <button
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
  
          <div
            className="mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
            role="progressbar"
            aria-valuenow={strengthScore}
            aria-valuemin={0}
            aria-valuemax={4}
            aria-label="Password strength"
          >
            <div
              className={\`h-full \${getStrengthColor(strengthScore)} transition-all duration-500 ease-out\`}
              style={{ width: \`\${(strengthScore / 4) * 100}%\` }}
            ></div>
          </div>
  
          <p
            id={\`\${id}-description\`}
            className="mb-2 text-sm font-medium text-foreground"
          >
            {getStrengthText(strengthScore)}. Must contain:
          </p>
  
          <ul className="space-y-1.5" aria-label="Password requirements">
            {strength.map((req, index) => (
              <li key={index} className="flex items-center gap-2">
                {req.met ? (
                  <Check
                    size={16}
                    className="text-emerald-500"
                    aria-hidden="true"
                  />
                ) : (
                  <X
                    size={16}
                    className="text-muted-foreground/80"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={\`text-xs \${req.met ? "text-emerald-600" : "text-muted-foreground"}\`}
                >
                  {req.text}
                  <span className="sr-only">
                    {req.met ? " - Requirement met" : " - Requirement not met"}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  
    export { InputWithPasswordIndicator };
    `,
  },

  {
    id: "example6",
    title: " Voice Input",
    commandRun:
      'npx shadcn@latest add "https://21st.dev/r/kokonutd/ai-voice-input"',
    component: (
      <div className=" flex gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <AIVoiceInputDemo />
      </div>
    ),
    code: `
  import { AIVoiceInput } from "@/components/ui/ai-voice-input";
  import { useState } from "react";

  export function AIVoiceInputDemo() {
    const [recordings, setRecordings] = useState<{ duration: number; timestamp: Date }[]>([]);

    const handleStop = (duration: number) => {
      setRecordings(prev => [...prev.slice(-4), { duration, timestamp: new Date() }]);
    };

    return (
      <div className="space-y-8">
          <div className="space-y-4">
            <AIVoiceInput 
              onStart={() => console.log('Recording started')}
              onStop={handleStop}
            />   
        </div>
      </div>
    );
  }
  `,
  },
];
