"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = useQuery(api.projects.get);
  console.log("Projects", projects)
  const createProject = useMutation(api.projects.create)

  return (
    <main className="flex flex-col gap-2 p-4">
      <p>Hello</p>
      <Button onClick={() => createProject({
        name: "Project 2"
      })}>
        Add projects
      </Button>

    </main>
  );
}
