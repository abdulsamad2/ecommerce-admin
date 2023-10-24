"user client";
import React from "react";
import { Button } from "./button";
import { Trash } from "lucide-react";
import { Separator } from "./separator";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </>
  );
};

export default Heading;
