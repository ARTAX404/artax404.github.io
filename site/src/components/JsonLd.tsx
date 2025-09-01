"use client";
import { personJsonLd } from "@/lib/schema";

export default function JsonLd() {
  const json = personJsonLd();
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

