/**
 * Meta Pixel tracking utilities
 * Use these functions to track custom events throughout your application
 */

type MetaPixelEvent =
  | "PageView"
  | "ViewContent"
  | "Search"
  | "AddToCart"
  | "AddToWishlist"
  | "InitiateCheckout"
  | "AddPaymentInfo"
  | "Purchase"
  | "Lead"
  | "CompleteRegistration"
  | "Contact"
  | "CustomizeProduct"
  | "Donate"
  | "FindLocation"
  | "Schedule"
  | "StartTrial"
  | "SubmitApplication"
  | "Subscribe";

interface MetaPixelParams {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  contents?: Array<{ id: string; quantity: number }>;
  content_type?: string;
  value?: number;
  currency?: string;
  search_string?: string;
  status?: boolean;
  [key: string]: any;
}

/**
 * Track a standard Meta Pixel event
 * @param eventName - The name of the event to track
 * @param params - Optional parameters for the event
 */
export const trackMetaEvent = (
  eventName: MetaPixelEvent,
  params?: MetaPixelParams,
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};

/**
 * Track a custom Meta Pixel event
 * @param eventName - The name of the custom event
 * @param params - Optional parameters for the event
 */
export const trackCustomMetaEvent = (
  eventName: string,
  params?: MetaPixelParams,
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
};

/**
 * Track when a user views content
 * @param contentName - Name of the content being viewed
 * @param contentCategory - Category of the content
 */
export const trackViewContent = (
  contentName: string,
  contentCategory?: string,
) => {
  trackMetaEvent("ViewContent", {
    content_name: contentName,
    content_category: contentCategory,
  });
};

/**
 * Track when a user performs a search
 * @param searchQuery - The search query string
 */
export const trackSearch = (searchQuery: string) => {
  trackMetaEvent("Search", {
    search_string: searchQuery,
  });
};

/**
 * Track when a user completes a form or registration
 * @param formName - Name of the form completed
 */
export const trackCompleteRegistration = (formName?: string) => {
  trackMetaEvent("CompleteRegistration", {
    content_name: formName,
    status: true,
  });
};

/**
 * Track when a user submits a contact form or initiates contact
 * @param contactMethod - The method of contact (e.g., "email", "phone", "form")
 */
export const trackContact = (contactMethod?: string) => {
  trackMetaEvent("Contact", {
    content_name: contactMethod,
  });
};

/**
 * Track when a user generates a lead
 * @param leadType - Type of lead generated
 * @param value - Optional value of the lead
 */
export const trackLead = (leadType?: string, value?: number) => {
  trackMetaEvent("Lead", {
    content_name: leadType,
    value: value,
    currency: "USD",
  });
};
