import type { Metadata } from "next";

import { TERMS_AND_CONDITIONS } from "@/lib/legal";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pace Studio",
  description:
    "Terms and conditions for Pace Studio classes, class packs, and memberships.",
};

export default function TermsPage() {
  return <LegalPage doc={TERMS_AND_CONDITIONS} />;
}
