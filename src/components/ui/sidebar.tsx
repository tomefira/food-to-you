"use client"

import * as React from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 w-60 bg-white shadow-lg">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black p-4"><span className="text-red-600 bg-red-100 px-2 py-1 rounded-md">Food-To-You</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
}
