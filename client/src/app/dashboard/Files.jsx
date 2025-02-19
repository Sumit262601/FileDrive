import React from 'react';
import { Button } from "@/components/ui/button";
import { HiMiniDocumentArrowUp, HiMiniFolder } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TaskPage from '@/app/dashboard/Table';

const Files = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-12">
        <h1 className="font-semibold text-3xl">Manage Files</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <FaPlus />
              Add New
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mt-2 w-56" align="end">

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <DropdownMenuShortcut>
                  <HiMiniDocumentArrowUp />
                </DropdownMenuShortcut>
                New File
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <DropdownMenuShortcut>
                  <HiMiniFolder />
                </DropdownMenuShortcut>
                Upload Folder
              </DropdownMenuItem>
            </DropdownMenuGroup>

          </DropdownMenuContent>

        </DropdownMenu>
      </div>

      <TaskPage />
    </>
  );
};

export default Files;