export interface Currency {
    code: string
    name: string
    symbol: string
}

export interface FeatureConfig {
    isCustomDomainSupportAvailable: boolean
    isWebhookSupportAvailable: boolean
}

export interface Product {
    id: string | null
    priceId: string | null
    provider: string | null
}

export interface SubscriptionPlan {
    basePrice: number
    currency: Currency
    deleted: boolean
    description: string
    durationDays: number
    durationDaysText: string
    featureConfig: FeatureConfig
    id: string
    isActive: boolean
    isApplicableToPurchase: boolean
    listedPrice: number
    mau: number
    packBenefits: string[]
    paymentGatewaysAllowed: string[] | null
    platforms: string[]
    product: Product
    recurringCycleCount: number
    recurringFrequency: "MONTHLY" | "YEARLY" | string
    title: string
}
