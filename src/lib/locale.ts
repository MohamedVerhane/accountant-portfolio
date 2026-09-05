import { cookies } from "next/headers";
import { STORAGE_KEY, type Locale } from "@/redux/slices/locale-slice";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const stored = cookieStore.get(STORAGE_KEY)?.value;
  return stored === "en" ? "en" : "ar";
}