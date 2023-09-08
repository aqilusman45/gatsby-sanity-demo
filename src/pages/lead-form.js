import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import LeadForm from '../sections/LeadForm/LeadForm'

const Test = () => (
  <Layout>
    <LeadForm />
  </Layout>
)

export const Head = () => <Seo title="Lead Form" />

export default Test
