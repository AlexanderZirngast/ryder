import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export function ThemeToggleSidebarItem() {
  
  
  const { theme, setTheme} = useTheme()
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  return (
   <SidebarMenuItem>
  <SidebarMenuButton  className="bg-transparent hover:bg-sidebar-accent shadow-none border-none">
    <div onClick={toggleTheme} className="flex items-center gap-2 cursor-pointer">
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>Toggle theme</span>
    </div>
  </SidebarMenuButton>
</SidebarMenuItem>
  )
}