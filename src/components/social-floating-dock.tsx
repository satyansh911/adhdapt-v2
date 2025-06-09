import { FloatingDock } from "@/components/ui/floating_dock"
import { Home, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export default function SocialFloatingDock() {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Instagram",
      icon: <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://instagram.com/yourusername",
    },
    {
      title: "Facebook",
      icon: <Facebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://facebook.com/yourusername",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://twitter.com/yourusername",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://linkedin.com/in/yourusername",
    },
  ]

  return (
    <div className="flex justify-center">
      <FloatingDock items={links} />
    </div>
  )
}
