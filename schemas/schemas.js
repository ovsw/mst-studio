import React from 'react'
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import simpleBlockText from './simpleBlockText'
import siteSettings from './siteSettings'

// Content Types
import page from './types/page'
import pagePerformance from './types/pagePerformance'
import pageHidden from './types/pageHidden'
import siteGlobal from './types/siteGlobal'
import post from './types/post'

// Modules
import externalLink from './modules/externalLink'
import heroInnerModule from './modules/heroInnerModule'
import iframeEmbed from './rteModules/iframeEmbed'
import internalLink from './modules/internalLink'
import metaCard from './modules/metaCard'
import social from './modules/social'
import pageItem from './modules/pageItem'
import pageModule from './modules/pageModule'
import postModule from './modules/postModule'
import pagePerformanceModule from './modules/pagePerformanceModule'
import imageModule from './modules/imageModule'
import imageWTextOverModule from './modules/imageWTextOverModule'
import standardText from './modules/standardText'
import simpleBlockTextEnhanced from './simpleBlockTextEnhanced'
import moduleContent from './modules/moduleContent'

// RTE Modules
import ctaBlock from './rteModules/ctaBlock'
import youtube from './rteModules/youtube'

// GraphQL Tab Modules
import globalContent from './tabs/globalContent'
import pageContent from './tabs/pageContent'
import postContent from './tabs/postContent'
import pagePerformanceContent from './tabs/pagePerformanceContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    siteGlobal,
    page,
    pagePerformance,
    pageHidden,
    post,
    // Modules
    externalLink,
    heroInnerModule,
    iframeEmbed,
    internalLink,
    pageModule,
    postModule,
    pagePerformanceModule,
    pageItem,
    social,
    standardText,
    simpleBlockTextEnhanced,
    imageModule,
    imageWTextOverModule,
    moduleContent,
    metaCard,
    blockContent,
    simpleBlockText,
    // Grapqhl Tabs things
    globalContent,
    pageContent,
    postContent,
    pagePerformanceContent,
    ctaBlock,
    youtube

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
