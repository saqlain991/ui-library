import PreviewGithubStars from "@/components/github-starButton";
import { GlareCard } from "@/components/GlareCard";
import { GradientButton } from "@/components/gradientButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Badge } from "@/components/ui/badge";
import { ButtonColorful } from "@/components/ui/button-colorful";
import DisplayCards from "@/components/ui/display-cards";
import { SocialCard } from "@/components/ui/social-card";
import Image from "next/image";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export const AvatarsComponentExample = [
  {
    id: "example1",
    title: "Magic UI Avatar Circles",
    commandRun:
      'npx shadcn@latest add "https://21st.dev/r/magicui/avatar-circles"',
    component: (
      <div className="w-full h-64 flex flex-col gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8   ">
        <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
      </div>
    ),
    code: `import { AvatarCircles } from "@/components/ui/avatar-circles"

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
]

export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
}
`,
  },
  {
    id: "example2",
    title: "Avartar with Verified Badge",
    commandRun: 'npx shadcn@latest add "https://21st.dev/r/originui/avatar"',
    component: (
      <div className="w-full flex flex-col gap-2 items-center ">
        <Avatar>
          <AvatarImage
            src="https://originui.com/avatar-80-07.jpg"
            alt="Kelly King"
          />
          <AvatarFallback>KK</AvatarFallback>
        </Avatar>
      </div>
    ),
    code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://originui.com/avatar-80-07.jpg" alt="Kelly King" />
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
  );
}

function AvatarFallbackDemo() {
  return (
    <Avatar>
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
  );
}

function AvatarIconDemo() {
  return (
    <Avatar>
      <AvatarFallback>
        <UserRound size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
      </AvatarFallback>
    </Avatar>
  );
}

export { AvatarDemo, AvatarFallbackDemo, AvatarIconDemo };
 `,
  },
];
