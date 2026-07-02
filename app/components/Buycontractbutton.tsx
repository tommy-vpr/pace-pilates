"use client";
import { useEffect, useRef } from "react";

type BuyContractButtonProps = {
  serviceId: string;
  label?: string;
};

export default function BuyContractButton({
  serviceId,
  label = "Buy Now",
}: BuyContractButtonProps) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    const s = document.createElement("script");
    s.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <span className="healcode-buy-button mt-4 inline-block">
      <healcode-widget
        data-version="0.2"
        data-link-class="healcode-contract-text-link"
        data-site-id="135634"
        data-mb-site-id="5754511"
        data-service-id={serviceId}
        data-bw-identity-site="true"
        data-type="contract-link"
        data-inner-html={label}
      />
    </span>
  );
}
