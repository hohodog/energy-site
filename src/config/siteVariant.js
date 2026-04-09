export const siteVariant = import.meta.env.VITE_SITE_VARIANT || 'corporate'

export const isTechVariant = siteVariant === 'tech'
export const isCorporateVariant = !isTechVariant
