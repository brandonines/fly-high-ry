import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { config } from './config'

export const urlFor = ( source ) => createImageUrlBuilder(config).image(source)

export const userPreviewSubscription = createPreviewSubscriptionHook(config)

export const userCurrentUser = createCurrentUserHook(config)
