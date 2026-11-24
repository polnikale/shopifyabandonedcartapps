export type ShopifyApp = {
  slug: string;
  name: string;
  category: string;
  bestFor: string;
  pricing: string;
  priceDetail: string;
  rating: string;
  shopifyDepth: 'Native' | 'Deep' | 'Basic' | 'Integration' | 'Not assessed';
  automationDepth: 'Advanced' | 'Solid' | 'Basic' | 'Minimal' | 'Not assessed';
  tagline: string;
  strengths: string[];
  limits: string[];
  features: string[];
  channels: string[];
  shopifyFit: string;
};

// Catalog entries identify evaluation questions, not verified capabilities or rankings.
export const APPS: ShopifyApp[] = [
  { slug: "sequenzy", name: "Sequenzy", shopifyFit: "Can a connected Shopify event start a sequence, and does a later purchase cancel its pending reminders?" },
  { slug: "klaviyo", name: "Klaviyo", shopifyFit: "Which cart and checkout events enter separate flows, and how are purchase exclusions shared?" },
  { slug: "omnisend", name: "Omnisend", shopifyFit: "Can one journey coordinate channel permissions and stop every pending branch after purchase?" },
  { slug: "shopify-email", name: "Shopify Email", shopifyFit: "Which recovery steps can the installed Shopify setup own without a second sender?" },
  { slug: "yotpo-email-sms", name: "Yotpo Email & SMS", shopifyFit: "Which email and SMS products remain available, and can loyalty and review data still reach the chosen sender?" },
  { slug: "privy", name: "Privy", shopifyFit: "Can captured subscribers retain source and offer context when they enter recovery?" },
  { slug: "drip", name: "Drip", shopifyFit: "Can a visual workflow react to cart edits and suppress a queued message after purchase?" },
  { slug: "postscript", name: "Postscript", shopifyFit: "Can an SMS reminder respect recorded permission and stop after an order or opt-out?" },
  { slug: "attentive", name: "Attentive", shopifyFit: "Who owns implementation and reply handling, and what service scope appears in the quote?" },
  { slug: "mailchimp", name: "Mailchimp", shopifyFit: "Can existing audience history map to Shopify events without duplicating subscribers or sends?" },
  { slug: "activecampaign", name: "ActiveCampaign", shopifyFit: "Can account and sales follow-up coexist with consumer recovery without conflicting ownership?" },
  { slug: "brevo", name: "Brevo", shopifyFit: "What is the total cost for marketing and transactional sends at the required event volume?" },
  { slug: "sendlane", name: "Sendlane", shopifyFit: "Which migration tasks and reporting reconciliation are included in the proposed service?" },
  { slug: "aftership-email", name: "AfterShip Email", shopifyFit: "Is the entry event from marketing automation or shipment tracking, and which product owns the send?" },
  { slug: "recart", name: "Recart", shopifyFit: "Can a mobile recovery workflow coordinate with the existing email sender after checkout completes?" },
  { slug: "justuno", name: "Justuno", shopifyFit: "Can an onsite signup pass product interest and permission to the recovery sender?" },
  { slug: "rejoiner", name: "Rejoiner", shopifyFit: "Which strategy, creative, implementation and reporting work is included alongside software?" },
  { slug: "marsello", name: "Marsello", shopifyFit: "Can POS and online identities reconcile loyalty eligibility before an offer is sent?" },
  { slug: "firepush", name: "Firepush", shopifyFit: "Is web push currently available for the installed app, and what happens when permission is revoked?" },
  { slug: "smsbump", name: "SMSBump", shopifyFit: "Is this a legacy product identity, and where should existing SMS subscribers and consent migrate?" },
  { slug: "tinyemail", name: "tinyEmail", shopifyFit: "Can campaign drafting use the correct variant data, and which event actually starts recovery?" },
].map((entry) => ({
  ...entry,
  category: 'Evaluation candidate',
  bestFor: entry.shopifyFit,
  pricing: 'Not verified',
  priceDetail: 'Obtain a current quote for the required event, contact and message volume.',
  rating: 'Not assessed',
  shopifyDepth: 'Not assessed' as const,
  automationDepth: 'Not assessed' as const,
  tagline: entry.shopifyFit,
  strengths: [],
  limits: ['Listing does not establish current availability or Shopify recovery support.'],
  features: [],
  // Preserve directory pair generation; marketing is a routing tag, not a feature claim.
  channels: ['marketing'],
}));

export function appBySlug(slug: string) {
  return APPS.find((a) => a.slug === slug);
}

export function channelApps(channel: string) {
  return APPS.filter((app) => app.channels.includes(channel) || app.channels.includes('marketing'));
}

export function comparisonPairs() {
  const pairs: [ShopifyApp, ShopifyApp][] = [];
  const emailApps = channelApps('email');
  for (let i = 0; i < emailApps.length; i++) {
    for (let j = i + 1; j < Math.min(emailApps.length, i + 7); j++) {
      pairs.push([emailApps[i], emailApps[j]]);
    }
  }
  return pairs.slice(0, 70);
}
