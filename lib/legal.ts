/* ---------------------------------------------------------------- */
/*  Pace Studio — legal documents (Privacy Policy, Terms)            */
/*                                                                   */
/*  Plain-data content rendered by app/components/LegalPage.tsx.      */
/*  Edit the text here; the layout stays the same.                   */
/* ---------------------------------------------------------------- */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = { heading: string; blocks: LegalBlock[] };

export type LegalDoc = {
  title: string;
  intro: string[];
  sections: LegalSection[];
};

export const PRIVACY_POLICY: LegalDoc = {
  "title": "Privacy Policy",
  "intro": [
    "This Privacy Policy explains how Pace Studio (\"Studio,\" \"we,\" \"us\") collects, uses, and protects your personal information when you visit our website or app, create an account, book classes, make purchases, or visit the studio. By using our services, you agree to this Privacy Policy."
  ],
  "sections": [
    {
      "heading": "Information We Collect",
      "blocks": [
        {
          "type": "p",
          "text": "We collect the following information:"
        },
        {
          "type": "ul",
          "items": [
            "Contact information: your name, email address, phone number, and mailing address.",
            "Account and booking information: your login details, class bookings, attendance, waitlist activity, purchases, membership status, and class credits.",
            "Payment information: your card or payment details, which are entered into and processed by our booking and payment providers. The Studio does not store your full card number.",
            "Health and safety information: information you provide in our Liability Waiver and Release Form or tell our staff, such as injuries, medical conditions, or pregnancy, and your emergency contact's name and phone number.",
            "Photos and video: images of you taken during classes, as described in our Liability Waiver and Release Form.",
            "Communications: messages you send us by email, text, or through our website or app.",
            "Device and usage information: when you use our website or app, our booking provider and other service providers may automatically collect information such as your IP address, browser type, device type, pages viewed, and how you interact with the website or app, using cookies and similar technologies."
          ]
        }
      ]
    },
    {
      "heading": "How We Use Your Information",
      "blocks": [
        {
          "type": "p",
          "text": "We use your information to:"
        },
        {
          "type": "ul",
          "items": [
            "Create and manage your account, bookings, memberships, and class credits",
            "Process payments, membership renewals, and fees",
            "Keep classes safe, including evaluating your ability to participate and contacting your emergency contact if needed",
            "Send booking confirmations, waitlist notices, reminders, renewal notices, and other account messages",
            "Send news, offers, and promotions, if you have not opted out",
            "Promote the Studio on social media and in marketing materials, as described in our Liability Waiver and Release Form",
            "Respond to your questions and requests",
            "Improve our classes, website, and app",
            "Comply with legal obligations and protect the rights and safety of the Studio, our clients, and our staff"
          ]
        }
      ]
    },
    {
      "heading": "How We Share Your Information",
      "blocks": [
        {
          "type": "p",
          "text": "The Studio does not sell your personal information, and does not share it with third parties for their own marketing purposes."
        },
        {
          "type": "p",
          "text": "We share your information only with:"
        },
        {
          "type": "ul",
          "items": [
            "Service providers who help us run the Studio, such as our booking and scheduling platform, payment processors, and email and text message providers. These providers may use your information only to provide services to us.",
            "Emergency services, if needed to protect your health or safety.",
            "Government authorities or other parties, when required by law or to protect the rights and safety of the Studio, our clients, or others.",
            "A buyer or successor, if the Studio is sold or transferred."
          ]
        }
      ]
    },
    {
      "heading": "Cookies, Tracking, and Do Not Track",
      "blocks": [
        {
          "type": "p",
          "text": "Our website and app, including the booking platform we use, may use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the website and app are used. Third parties that provide these services may collect information about your online activities over time and across different websites. You can block or delete cookies through your browser settings, but some features may not work properly."
        },
        {
          "type": "p",
          "text": "Our website does not currently respond to \"Do Not Track\" browser signals."
        }
      ]
    },
    {
      "heading": "How Long We Keep Your Information",
      "blocks": [
        {
          "type": "p",
          "text": "We keep your information for as long as you remain a client, and for a reasonable period afterward as needed for legal, tax, and recordkeeping purposes. Signed waivers are kept for as long as needed to protect the Studio's legal rights."
        }
      ]
    },
    {
      "heading": "How We Protect Your Information",
      "blocks": [
        {
          "type": "p",
          "text": "We use reasonable safeguards to protect your information, and we limit access to health information to staff who need it to keep classes safe. No method of transmission or storage is completely secure, so we cannot guarantee absolute security."
        }
      ]
    },
    {
      "heading": "Your Choices",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Account information: You can review and update your contact and account information in your Pace Studio account, or by emailing info@pace-studio.com.",
            "Access and deletion: You may ask to see the personal information we have about you or ask us to delete it by emailing info@pace-studio.com. We will respond within a reasonable time. We may need to keep some information, such as signed waivers and payment records, as required by law or to protect our legal rights.",
            "Marketing messages: You can opt out of marketing emails by using the unsubscribe link, or out of marketing texts by replying STOP. You will still receive account and booking messages.",
            "Photos and video: You can withdraw your consent to promotional use of your image at any time by emailing info@pace-studio.com."
          ]
        }
      ]
    },
    {
      "heading": "Children",
      "blocks": [
        {
          "type": "p",
          "text": "Our services are intended for adults 18 and older. We do not knowingly collect personal information from children under 18. If you believe a child has provided us with personal information, please contact us and we will delete it."
        }
      ]
    },
    {
      "heading": "Changes to This Policy",
      "blocks": [
        {
          "type": "p",
          "text": "We may update this Privacy Policy from time to time. When we do, we will post the updated policy on our website and app. If we make significant changes, we will also notify you by email."
        }
      ]
    },
    {
      "heading": "Contact Us",
      "blocks": [
        {
          "type": "p",
          "text": "If you have questions about this Privacy Policy or your information, please contact:"
        },
        {
          "type": "p",
          "text": "Pace Studio — info@pace-studio.com"
        }
      ]
    }
  ]
};

export const TERMS_AND_CONDITIONS: LegalDoc = {
  "title": "Terms & Conditions",
  "intro": [
    "These Terms and Conditions (\"Terms\") apply to all classes, memberships, class packs, and other services offered by Pace Studio (\"Studio,\" \"we,\" \"us\"). By creating an account, booking a class, or making a purchase, you (\"Client,\" \"you\") agree to these Terms. Please read them carefully."
  ],
  "sections": [
    {
      "heading": "Eligibility and Accounts",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "You must be at least 18 years old to create an account and attend classes.",
            "You must complete and sign the Studio's Liability Waiver and Release Form before attending your first class.",
            "You are responsible for keeping your account information accurate and up to date, including your contact information, emergency contact, and payment method.",
            "Accounts, memberships, and class credits are personal and may not be shared, transferred, or resold unless the Studio agrees in writing."
          ]
        }
      ]
    },
    {
      "heading": "Booking and Check-In",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Classes must be booked in advance through the Pace Studio website or app.",
            "Please arrive at least 10 minutes before class to check in and set up. For heated classes, arriving early helps you acclimate to the room.",
            "Late arrivals: There is a 5-minute grace period after class begins. To protect the safety of all clients, entry may be refused after the grace period. If you are refused entry for arriving late, the class will be treated as a no-show.",
            "If a class is full, you may join the waitlist. If a spot opens, you will be automatically added to the class and notified. If you are added from the waitlist, our cancellation policy applies to you as if you had booked directly."
          ]
        }
      ]
    },
    {
      "heading": "Cancellations, Late Cancellations, and No-Shows",
      "blocks": [
        {
          "type": "p",
          "text": "These policies apply to all clients, including members, class pack holders, and drop-ins."
        },
        {
          "type": "ul",
          "items": [
            "You may cancel a booking without penalty up to 12 hours before class begins.",
            "Late cancellation: Canceling less than 12 hours before class will result in a $12 late cancellation fee and the loss of the class credit.",
            "No-show: Failing to attend a booked class without canceling will result in a $20 no-show fee and the loss of the class credit.",
            "Fees will be charged to the payment method on file.",
            "The Studio may waive fees at its discretion in cases of emergency or illness."
          ]
        }
      ]
    },
    {
      "heading": "Pricing and Payment",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Current prices for classes, class packs, and memberships are listed on the Pace Studio website and app. All prices include all mandatory fees.",
            "Payment is due at the time of purchase. By providing a payment method, you authorize the Studio to charge it for purchases, membership dues, and any fees described in these Terms.",
            "If a payment fails, the Studio may suspend your booking privileges until your account is current."
          ]
        }
      ]
    },
    {
      "heading": "Class Packs and Drop-Ins",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Class packs and drop-in credits can be used for any eligible class, subject to availability.",
            "Class packs expire as stated at the time of purchase. Unused credits are forfeited after the expiration date."
          ]
        }
      ]
    },
    {
      "heading": "Memberships and Automatic Renewal",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Memberships renew automatically every month. You will be charged the monthly price of the membership package you purchased (plus applicable taxes) to your payment method on file until you cancel.",
            "Memberships have a minimum commitment of 3 months.",
            "Before you purchase a membership, you will be shown the membership price, how often you will be charged, and how to cancel. You will be asked to separately and affirmatively agree to automatic renewal.",
            "After purchase, you will receive a confirmation by email that includes the renewal terms and how to cancel.",
            "We will send you a reminder at least once a year describing your membership, how often you are charged, and how to cancel.",
            "If your membership price changes, we will notify you at least 7 days (and no more than 30 days) before the new price takes effect, and explain how to cancel.",
            "Memberships cannot be frozen or paused."
          ]
        }
      ]
    },
    {
      "heading": "Canceling Your Membership",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "You can cancel your membership online through your Pace Studio account (website or app), or by emailing info@pace-studio.com from the email address on file with your account. As required by California law, the Studio will also honor cancellation requests made in person at the studio or by first-class mail.",
            "Cancellation takes effect at the end of your current billing period (or at the end of your minimum commitment, if later), and you will not be charged again. You may continue to attend classes through the end of the period you have already paid for.",
            "Right to cancel within 5 business days: You may cancel a new membership contract for any reason until midnight of the fifth business day after the date you sign it, and receive a full refund, less the cost of any classes you attended.",
            "You may also cancel your membership and receive a prorated refund of any prepaid amounts if: you die or become physically unable to use the Studio's services (certified by a physician, if requested), or you move more than 25 miles from the Studio and the Studio cannot transfer your membership to a comparable facility.",
            "Any refund owed under this section will be issued within 10 days of receiving your notice of cancellation."
          ]
        }
      ]
    },
    {
      "heading": "Refunds",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Except as stated in Section 7 or as required by law, purchases of classes, class packs, and memberships are non-refundable.",
            "If the Studio cancels a class, any class credit used to book it will be returned to your account.",
            "All retail sales are final. Retail products cannot be refunded or exchanged."
          ]
        }
      ]
    },
    {
      "heading": "Class Schedule, Instructors, and Studio Changes",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "The Studio may change the class schedule, instructors, class formats, room temperatures, or hours of operation at any time. We will make reasonable efforts to notify booked clients of class cancellations.",
            "If the Studio permanently closes or can no longer provide the services you paid for, you will be entitled to a prorated refund of prepaid amounts for services not received."
          ]
        }
      ]
    },
    {
      "heading": "Studio Etiquette and Safety",
      "blocks": [
        {
          "type": "ul",
          "items": [
            "Follow all instructor directions and studio rules.",
            "Bring water and a mat, and stay hydrated, especially in heated classes. Leave class or the heated room if you feel unwell.",
            "Let your instructor know about any injuries, health conditions, or pregnancy before class.",
            "Be respectful of fellow clients and staff. Keep phones silenced and stored during class.",
            "Clean and return all equipment after use.",
            "The Studio may refuse service, cancel bookings, or terminate memberships for unsafe, disruptive, abusive, or inappropriate behavior. If the Studio terminates your membership for reasons other than your breach of these Terms, you will receive a prorated refund of prepaid amounts."
          ]
        }
      ]
    },
    {
      "heading": "Health and Assumption of Risk",
      "blocks": [
        {
          "type": "p",
          "text": "Exercise, including heated and non-heated mat pilates, involves inherent risks. Participation in any class is subject to the Liability Waiver and Release Form you signed, which is incorporated into these Terms. You agree to consult a physician before participating if you have any medical concerns."
        }
      ]
    },
    {
      "heading": "Personal Property",
      "blocks": [
        {
          "type": "p",
          "text": "The Studio is not responsible for lost, stolen, or damaged personal property. Lost items are held for 30 days and then donated."
        }
      ]
    },
    {
      "heading": "Photography and Media",
      "blocks": [
        {
          "type": "p",
          "text": "The Studio may photograph or film classes for promotional purposes, including social media and marketing materials. As described in the Liability Waiver and Release Form, you consent to this use of your image without compensation. If you do not consent, or wish to withdraw your consent, please email info@pace-studio.com."
        }
      ]
    },
    {
      "heading": "Communications",
      "blocks": [
        {
          "type": "p",
          "text": "By creating an account, you agree to receive transactional messages from the Studio by email and, if you provide a mobile number, by text message, including booking confirmations, waitlist notices, reminders, and account notices. You may opt out of marketing emails or texts at any time by using the unsubscribe link or replying STOP. Message and data rates may apply."
        }
      ]
    },
    {
      "heading": "Privacy",
      "blocks": [
        {
          "type": "p",
          "text": "The Studio collects your contact, payment, booking, and health information to manage your account, process payments, provide safe classes, and contact you or your emergency contact if needed. Payment information is processed by our booking and payment providers and is not stored by the Studio. The Studio does not sell or share your personal information. We keep your information for as long as you remain a client and for a reasonable period afterward as needed for legal and recordkeeping purposes. Questions or requests about your information may be sent to info@pace-studio.com."
        }
      ]
    },
    {
      "heading": "Changes to These Terms",
      "blocks": [
        {
          "type": "p",
          "text": "The Studio may update these Terms from time to time. Updated Terms will be posted on the website and app. Changes will not affect purchases you have already made. Any change to membership pricing will be handled as described in Section 6."
        }
      ]
    },
    {
      "heading": "Governing Law",
      "blocks": [
        {
          "type": "p",
          "text": "These Terms are governed by the laws of the State of California. If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect."
        }
      ]
    },
    {
      "heading": "Contact Us",
      "blocks": [
        {
          "type": "p",
          "text": "Pace Studio — info@pace-studio.com"
        }
      ]
    }
  ]
};
