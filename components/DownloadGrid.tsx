import { downloads } from "@/data/downloads";
import AnimatedDownloadButton from "./AnimatedDownloadButton";

export default function DownloadGrid() {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {downloads.map((d) => (
        <AnimatedDownloadButton key={d.file} href={d.file} title={d.title} subtitle={d.meta} />
      ))}
    </div>
  );
}
