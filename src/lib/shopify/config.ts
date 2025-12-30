// Shopify Storefront API Configuration
export const SHOPIFY_CONFIG = {
  storePermanentDomain: 'lovable-project-so9yi.myshopify.com',
  storefrontToken: '747b8e89b00a0c72cc71241e878318ae',
  apiVersion: '2025-07',
};

export const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_CONFIG.storePermanentDomain}/api/${SHOPIFY_CONFIG.apiVersion}/graphql.json`;
