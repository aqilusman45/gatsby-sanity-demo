import React from 'react'
import { PortableText } from '@portabletext/react'
import clsx from 'clsx'
import { getImageDimensions } from '@sanity/asset-utils'
import clientConfig from '../../../client-config'
import ImageUrlBuilder from '@sanity/image-url'
import { Link } from 'gatsby'


const builder = ImageUrlBuilder({
  ...clientConfig.sanity,
})

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value)
  return (
    <img
      src={builder
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="eager"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

export const RichText = ({ richText, otherClasses }) => {
  const richTextClasses = clsx(otherClasses)

  return (
    <div className={richTextClasses}>
      <PortableText
        value={richText}
        components={{
          types: {
            image: SampleImageComponent,
          },
          marks: {
            link: ({ children, value }) => {
              const rel = !value.href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined

              return (
                <Link to={value.href} target={rel && '_blank'} rel={rel}>
                  {children}
                </Link>
              )
            },
          },
        }}
      />
    </div>
  )
}

export default RichText
