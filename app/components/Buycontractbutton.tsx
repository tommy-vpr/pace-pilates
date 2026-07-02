"use client";

/* ---------------------------------------------------------------- */
/*  Pace Studio — Buy button backed directly by a Healcode           */
/*  contract-link widget.                                            */
/*                                                                   */
/*  The healcode contract widget renders its OWN cart popup when      */
/*  clicked (Mindbody's overlay). So we don't wrap it in a custom     */
/*  modal — that just adds a redundant second click. Instead the      */
/*  widget IS the button: one click goes straight to the cart.        */
/*                                                                   */
/*  healcode.js (loaded globally in layout) scans on page load and    */
/*  hydrates this widget, turning the <healcode-widget> into a live   */
/*  link. It must therefore be present at load — which it is, since    */
/*  it renders inline in the card.                                    */
/* ---------------------------------------------------------------- */

type BuyContractButtonProps = {
  serviceId: string;
  label?: string;
};

export default function BuyContractButton({
  serviceId,
  label = "Buy Now",
}: BuyContractButtonProps) {
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
