import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/leonardo dicapital-modified.png" alt={AI_NAME} width={300} height={300} />
    <div className="w-3 h-3 rounded-full bg-green-500 absolute -bottom-0 -right-0 transform translate-x-0 translate-y-0"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // initializes a local state variable called mounted to false

  // Ensure this component only renders on the client to avoid hydration errors.
  useEffect(() => {  // useEffect hook runs after the component is mounted so can be used to update state once mounted
    setMounted(true);
  }, []);
  if (!mounted) return null;
  
  return (
    <div className="z-10 flex justify-center items-center fixed top-0 w-full p-5 bg-white dark:bg-gray-900 shadow-[0_7px_20px_0px_rgba(255,255,255,1)]">
      <div className="flex w-full">
        <div className="flex-0 w-[100px]"></div>
        <div className="flex-1 flex justify-center items-center gap-2">
          <AILogo />
          <p>{CHAT_HEADER}</p>
        </div>
        <div className="flex-0 w-[100px] flex justify-end items-center">
          <Button
            onClick={clearMessages}
            className="gap-2 shadow-sm"
            variant="outline"
            size="sm"
          >
            <EraserIcon className="w-4 h-4" />
            <span>{CLEAR_BUTTON_TEXT}</span>
          </Button>
          <Button
            onClick={() => {
              const newTheme = theme === "dark" ? "light" : "dark";
              setTheme(newTheme);
              console.log("Theme switched to:", newTheme);
            }}
            className="gap-2 shadow-sm"
            variant="outline"
            size="sm"
          >
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
