import { FloatingDock } from "@/components/ui/floating_dock"
import { Home, Instagram, Facebook, Twitter, Linkedin, Mail } from "lucide-react"


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
      href: "https://instagram.com/adhdapt4u",
    },
    {
      title: "Facebook",
      icon: <Facebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.facebook.com/share/16KiMQxDvL/?mibextid=wwXIfr",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://twitter.com/AdhDapt95514",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://linkedin.com/in/yourusername",
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:adhdaptforyou@gmail.com",
    },
  ]

  return (
    <div className="flex justify-center">
      <FloatingDock items={links} />
    </div>
  )
}
