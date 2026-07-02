import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "healcode-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "data-type"?: string;
          "data-widget-partner"?: string;
          "data-widget-id"?: string;
          "data-widget-version"?: string;
          "data-version"?: string;
          "data-link-class"?: string;
          "data-site-id"?: string;
          "data-mb-site-id"?: string;
          "data-bw-identity-site"?: string;
          "data-inner-html"?: string;
        },
        HTMLElement
      >;
    }
  }
}
