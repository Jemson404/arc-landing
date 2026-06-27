export type DownloadItem = {
  title: string;
  file: string;
  meta?: string;
};

export const downloads: DownloadItem[] = [
  { title: "ARC Bible — Founding Philosophy v2.1", file: "/downloads/ARC_Bible_v2_Formatted.pdf", meta: "PDF" },
  { title: "Developer Handbook v1.1 — Build With Us", file: "/downloads/ARC_Developer_Handbook_v1.1.pdf", meta: "PDF" },
  { title: "Investor Leaflet v1.0", file: "/downloads/ARC_Investor_Leaflet_v1.pdf", meta: "PDF" },
  { title: "Roadmap Leaflet v1.0 — Vision & Valuation", file: "/downloads/ARC_Roadmap_Leaflet_v1.pdf", meta: "PDF" },
  { title: "ARC Visual Pitch Deck", file: "/downloads/ARC_Visual_Pitch_Deck.pptx", meta: "PPTX" }
];
