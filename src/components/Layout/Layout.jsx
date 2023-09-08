import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { graphql, useStaticQuery } from 'gatsby'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import ReactCookieConsent from '../ReactCookieConsent/ReactCookieConsent'
import { ToastContainer } from 'react-toastify'

export const Layout = ({ children, props }) => {
  const isLinkContainId = typeof window !== 'undefined' && window.location.hash

  useEffect(() => {
    if (!isLinkContainId) {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 1000)
    }
  }, [])

  const {
    allSanityServicesPages: { nodes },
    allSanityTechnologiesPages: { nodes: techNodes },
    allSanityBlogCategory: { nodes: blogNodes },
  } = useStaticQuery(graphql`
    query allPagesSlugs {
      allSanityBlogCategory {
        nodes {
          category
          seoTitle
          metaDescription
        }
      }
      allSanityServicesPages {
        nodes {
          title
          slug {
            current
          }
        }
      }
      allSanityTechnologiesPages {
        nodes {
          type
          title
          slug {
            current
          }
        }
      }
    }
  `)

  const frontendNodes = techNodes.filter(({ type }) => type === 'front-end')
  const backendNodes = techNodes.filter(({ type }) => type === 'back-end')
  const MobileAppNodes = techNodes.filter(
    ({ type }) => type === 'mobile-application'
  )

  return (
    <>
          <ToastContainer />
      <Navbar
        services={nodes}
        frontendNodes={frontendNodes}
        backendNodes={backendNodes}
        MobileAppNodes={MobileAppNodes}
        blogNodes={blogNodes}
      />
      <main>{children}</main>
      <Footer services={nodes} technologies={techNodes} />
      <ReactCookieConsent/>
      <div>
        <TawkMessengerReact
          propertyId="64a46418cc26a871b02656e3"
          widgetId="1h4h2e0t0"
        />
      </div>
    </>
  )
}

export default Layout
