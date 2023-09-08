import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Heading from '../components/Heading/Heading'

const NotFoundPage = () => (
  <Layout>
      <div className="w-full h-[70vh] flex justify-center items-center flex-col bg-[#192a35] ">
      <Heading type='h1' otherClasses='font-satoshi text-white opacity-50' >404 Not Found</Heading>
      <p className='text-[24px] leading-[36px] mt-5  font-satoshi text-white opacity-50'>You just hit a route that doesn&#39;t exist...</p>
    </div>
    </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage