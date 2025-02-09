import PreviewGithubStars from "@/components/github-starButton";
import { GlareCard } from "@/components/GlareCard";
import { GradientButton } from "@/components/gradientButton";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { ButtonColorful } from "@/components/ui/button-colorful";
import DisplayCards from "@/components/ui/display-cards";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { SocialCard } from "@/components/ui/social-card";
import Image from "next/image";

export const CarouselExample = [
  {
    id: "example1",
    title: "Infinite Vertical Slider",
    commandRun:
      'npx shadcn@latest add "https://21st.dev/r/ibelick/infinite-slider"',
    component: (
      <div className="w-full h-64 flex  gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8   ">
        <div className="flex h-[350px] space-x-4">
          <InfiniteSlider direction="vertical">
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
          <InfiniteSlider direction="vertical" reverse>
            <img
              src="https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"
              alt="DAYS BEFORE RODEO - Travis Scott"
              className="aspect-square w-[120px] rounded-[4px]"
            />
            <img
              src="https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3"
              alt="You're in My System - TORYONTHEBEAT"
              className="aspect-square w-[120px] rounded-[4px]"
            />
            <img
              src="https://i.scdn.co/image/ab67616d00001e0234537499b159b0e6d18e5655"
              alt="You can't tell me - People Make the World Go Round"
              className="aspect-square w-[120px] rounded-[4px]"
            />
            <img
              src="https://i.scdn.co/image/ab67616d00001e020cd942c1a864afa4e92d04f2"
              alt="ye - Kanye West"
              className="aspect-square w-[120px] rounded-[4px]"
            />
            <img
              src="https://i.scdn.co/image/ab67616d00001e02a875c3ec944b4f164ab5c350"
              alt="Slime Season 3 - Young Thug"
              className="aspect-square w-[120px] rounded-[4px]"
            />
            <img
              src="https://i.scdn.co/image/ab67616d00001e026376f0d88bbbc8cd051e3401"
              alt="SWAG - 8ruki"
              className="aspect-square w-[120px] rounded-[4px]"
            />
          </InfiniteSlider>
        </div>
      </div>
    ),
    code: ` <div className='flex h-[350px] space-x-4'>
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
    </div>`,
  },
  {
    id: "example2",
    title: "3d Carousel ",
    commandRun:
      'npx shadcn@latest add "https://21st.dev/r/cult-ui/3d-carousel"',
    component: (
      <div className=" flex gap-2 items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <ThreeDPhotoCarousel />
      </div>
    ),
    code: `import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full max-w-4xl">
      <div className="min-h-[500px]  flex flex-col justify-center border border-dashed rounded-lg space-y-4">
        <div className="p-2">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </div>
  )
}
 `,
  },
];
