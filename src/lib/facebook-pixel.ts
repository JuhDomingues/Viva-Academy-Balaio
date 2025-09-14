// Declare fbq global function
declare global {
  interface Window {
    fbq: (action: string, eventName: string, parameters?: Record<string, unknown>) => void;
  }
}

// Eventos padrão do Facebook Pixel para e-commerce
export const FacebookPixelEvents = {
  // Eventos básicos
  PAGE_VIEW: 'PageView',
  VIEW_CONTENT: 'ViewContent',
  SEARCH: 'Search',
  ADD_TO_CART: 'AddToCart',
  ADD_TO_WISHLIST: 'AddToWishlist',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  ADD_PAYMENT_INFO: 'AddPaymentInfo',
  PURCHASE: 'Purchase',
  LEAD: 'Lead',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
  
  // Eventos customizados para Viva Academy
  SUBSCRIPTION_STARTED: 'SubscriptionStarted',
  CONTACT_SUBMITTED: 'ContactSubmitted',
  CONSULTATION_BOOKED: 'ConsultationBooked',
  COURSE_VIEWED: 'CourseViewed',
} as const;

export type FacebookPixelEventType = typeof FacebookPixelEvents[keyof typeof FacebookPixelEvents];

// Função para rastrear eventos com dados estruturados
export const trackPixelEvent = (eventName: FacebookPixelEventType, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Função para rastrear eventos customizados
export const trackCustomPixelEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Eventos específicos para Viva Academy
export const trackSubscriptionStarted = (subscriptionType: string, value?: number, currency = 'BRL') => {
  trackPixelEvent(FacebookPixelEvents.SUBSCRIPTION_STARTED, {
    content_name: subscriptionType,
    value,
    currency,
  });
};

export const trackContactSubmitted = (contactType: string) => {
  trackPixelEvent(FacebookPixelEvents.LEAD, {
    content_name: contactType,
  });
};

export const trackConsultationBooked = () => {
  trackPixelEvent(FacebookPixelEvents.LEAD, {
    content_name: 'Consultation Booking',
  });
};

export const trackCourseViewed = (courseName: string) => {
  trackPixelEvent(FacebookPixelEvents.VIEW_CONTENT, {
    content_name: courseName,
    content_type: 'course',
  });
};