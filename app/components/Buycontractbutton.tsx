"use client";

/* ---------------------------------------------------------------- */
/*  Pace Studio — Buy button backed by a Healcode purchase widget.   */
/*                                                                   */
/*  Mindbody has two link types for buying:                          */
/*   - "contract-link":  memberships / contracts (8-pack, Unlimited, */
/*                       Founding). class: healcode-contract-text-link*/
/*   - "pricing-link":   pricing options (drop-in, packs, intro).    */
/*                       class: healcode-pricing-option-text-link    */
/*                                                                   */
/*  The widget renders its OWN cart popup on click, so it IS the     */
/*  button — no wrapping modal. healcode.js (loaded in layout) scans */
/*  on page load and hydrates it, so it must be present at load and  */
/*  NOT inside a Framer Motion element (mid-animation layout reads    */
/*  null and crashes healcode).                                      */
/* ---------------------------------------------------------------- */

type BuyKind = "contract" | "pricing";

type BuyButtonProps = {
  serviceId: string;
  kind?: BuyKind;
  label?: string;
};

export default function BuyContractButton({
  serviceId,
  kind = "contract",
  label = "Buy Now",
}: BuyButtonProps) {
  const isContract = kind === "contract";

  return (
    <span className="healcode-buy-button mt-4 inline-block">
      <healcode-widget
        data-version="0.2"
        data-link-class={
          isContract
            ? "healcode-contract-text-link"
            : "healcode-pricing-option-text-link"
        }
        data-site-id="135634"
        data-mb-site-id="5754511"
        data-service-id={serviceId}
        data-bw-identity-site="true"
        data-type={isContract ? "contract-link" : "pricing-link"}
        data-inner-html={label}
      />
    </span>
  );
}
