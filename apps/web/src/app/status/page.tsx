import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@openstatus/ui";

import { Icons } from "@/components/icons";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { env } from "@/env";
import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "../shared-metadata";
import { externalStatusArray, getClassname } from "./utils";

export const revalidate = 600; // revalidate every 10 min

export const metadata: Metadata = {
  ...defaultMetadata,
  description: "Easily monitor if your external providers is working properly",
  title: "Is my external service down?",
  openGraph: {
    ...ogMetadata,
    title: "Is my external service down? | OpenStatus",
  },
  twitter: {
    ...twitterMetadata,
    title: "Is my external service down? | OpenStatus",
  },
};

const ExternalStatusPage = async () => {
  return (
    <h1>
    Hello World
    </h1>
  );
};

export default ExternalStatusPage;
