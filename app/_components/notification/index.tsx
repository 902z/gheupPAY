"use client";

import { Children, useState } from "react";
import Alarm from "./notification";

interface NotificationButtonProps {
  children: React.ReactNode;
}

export default function NotificationButton({
  children,
}: NotificationButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative w-[fit-content]">
      {Children.map(children, (child) => (
        <section onClick={() => setIsOpen(!isOpen)}>{child}</section>
      ))}
      {isOpen && <Alarm onClick={() => setIsOpen(!isOpen)} />}
    </section>
  );
}
