import type { Metadata } from "next";

import { PRIVACY_POLICY } from "@/lib/legal";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Pace Studio",
  description:
    "How Pace Studio collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={PRIVACY_POLICY} />;
}
