import React from 'react'
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import simpleBlockText from './simpleBlockText'
import simpleBlockTextColumn from './simpleBlockTextColumn'
import siteSettings from './siteSettings'

// Content Types
import page from './types/page'
import pagePerformance from './types/pagePerformance'
import pageWizard from './types/pageWizard'
import pageHidden from './types/pageHidden'
import siteGlobal from './types/siteGlobal'
import post from './types/post'
import testimonial from './types/testimonial'
import pricingTable from './types/pricingTable'
import commonText from './types/commonText'
import author from './types/author'
import redirects from './types/redirects'

// Modules
import heroInnerModule from './modules/heroInnerModule'
import iframeEmbed from './rteModules/iframeEmbed'
import metaCard from './modules/metaCard'
import social from './modules/social'
import globalSettingsTab from './modules/globalSettingsTab'
import pageItem from './modules/pageItem'
import pageModule from './modules/pageModule'
import authorModule from './modules/authorModule'
import postModule from './modules/postModule'
import pagePerformanceModule from './modules/pagePerformanceModule'
import pageWizardModule from './modules/pageWizardModule'
import imageWTextOverModule from './modules/imageWTextOverModule'
import standardText from './modules/standardText'
import simpleBlockTextEnhanced from './simpleBlockTextEnhanced'
import moduleContent from './modules/moduleContent'
import videoHero from './modules/videoHero'
import casettes from './modules/casettes'
import casette from './modules/casette'
import sectionWithItems from './modules/sectionWithItems'
import sectionItem from './modules/sectionItem'
import testimonials from './modules/testimonials'
import pricingTableRow from './modules/pricingTableRow'
import pricingTableRef from './modules/pricingTableRef'
import redirect from './modules/redirect'

// nav
import menus from './types/menus'
import internalLink from './modules/nav/internalLink'
import internalLinkWchildren from './modules/nav/internalLinkWChildren'
import internalLinkWSlug from './modules/nav/internalLinkWSlug'
// import externalLink from './modules/nav/externalLink'
// import externalLinkWChildren from './modules/nav/externalLinkWChildren'

// RTE Modules
import ctaBlock from './rteModules/ctaBlock'
import youtube from './rteModules/youtube'
import button from './rteModules/button'
import commonTextRef from './rteModules/commonTextRef'
import imageModule from './rteModules/imageModule'
import imgTextColumns from './rteModules/imgTextColumns'
import pullQuote from './rteModules/pullQuote'
import localFile from './rteModules/localFile'

// GraphQL Tab Modules
import globalContent from './tabs/globalContent'
import pageContent from './tabs/pageContent'
import postContent from './tabs/postContent'
import pagePerformanceContent from './tabs/pagePerformanceContent'
import pageWizardContent from './tabs/pageWizardContent'
import authorContent from './tabs/authorContent'

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
    // documents
    page,
    pagePerformance,
    pageWizard,
    pageHidden,
    post,
    testimonial,
    pricingTable,
    commonText,
    author,
    redirects,
    // components
    pricingTableRow,
    // Modules
    heroInnerModule,
    pageModule,
    authorModule,
    postModule,
    pagePerformanceModule,
    pageWizardModule,
    pageItem,
    social,
    standardText,
    simpleBlockText,
    simpleBlockTextColumn,
    simpleBlockTextEnhanced,
    imageModule,
    imgTextColumns,
    pullQuote,
    imageWTextOverModule,
    moduleContent,
    metaCard,
    blockContent,
    videoHero,
    casettes,
    casette,
    sectionWithItems,
    sectionItem,
    testimonials,
    pricingTableRef,
    commonTextRef,
    redirect,
    // tabs
    globalContent,
    pageContent,
    pagePerformanceContent,
    pageWizardContent,
    postContent,
    authorContent,
    // tab contents
    globalSettingsTab,
    // RTE
    ctaBlock,
    iframeEmbed,
    youtube,
    button,
    localFile,
    // nav
    menus,
    internalLink,
    internalLinkWchildren,
    internalLinkWSlug
    // externalLink,
    // externalLinkWChildren,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
