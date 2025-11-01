"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  MessageSquareText,
  NotebookPen,
  Sparkles,
  Settings,
  Plus,
  Save,
  Send,
  Trash2,
  Wand2,
  Boxes,
  LogOut,
  History,
  BookOpen,
  FolderOpen,
  Bot,
  PenSquare,
  Quote,
  Lightbulb,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);
  return [value, setValue];
}

async function fakeAI(prompt) {
  await new Promise((r) => setTimeout(r, 500));
  const list = [
    "Tambah konflik dalaman watak — takut kehilangan sesuatu.",
    "Masukkan detail tekstur & bunyi untuk rasa realism.",
    "Gunakan 'setup-payoff' — hint awal, reward kemudian.",
  ];
  return list[Math.floor(Math.random() * list.length)];
}

ex
