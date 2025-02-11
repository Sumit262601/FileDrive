import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HiUser, HiHome } from "react-icons/hi2";
import { CgLogOut } from "react-icons/cg";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuGroup>
          <a href="/profile">
            <DropdownMenuItem>
              <HiUser />
              User Setting
            </DropdownMenuItem>
          </a>

          <a href="/">
            <DropdownMenuItem>
              <HiHome />
              Landing Page
            </DropdownMenuItem>
          </a>

        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <Link to="/logout">
          <DropdownMenuItem>
            <CgLogOut />
            Log out
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav;