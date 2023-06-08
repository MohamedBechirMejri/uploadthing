import { createBuilder } from "./src/upload-builder";

export { createNextPageApiHandler } from "./src/next/core/page";
export type { FileRouter } from "@uploadthing/shared";

export const createUploadthing = () => createBuilder<"pages">();
