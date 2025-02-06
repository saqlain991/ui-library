import {
  Blocks,
  Github,
  Instagram,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="fixed bottom-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10 mt-10">
        <div className=" container flex h-16 items-center justify-between ">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <Github className="h-6 w-6" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <p>
              Made with ❤️ by{" "}
              <Link href={"https://saqlain.work"}>
                <span className="underline">Saqlain Sultan</span>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
