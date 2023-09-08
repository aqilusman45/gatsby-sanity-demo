import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Image } from '../../components/Image/Image'
import Heading from '../../components/Heading/Heading'
import './blogpost.scss'
import RichText from '../../components/RichText/RichText'
import { Icon } from '../../components/Icon'
import twitterIconGreen from './../../images/angleBrackets-icons/twitter-blogs-green-icon.svg'
import LinkIconGreen from './../../images/angleBrackets-icons/link-green-icon.svg'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'

export const BlogPostSection = ({
  otherClasses,
  title,
  slug,
  publishedAt,
  desktopImage,
  authors: { name },
  blogCategory: { category },
  _rawBody,
}) => {
  const blogPostSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray_300 pt-hero_pt_mob pb-hero_pb_mob lg:pt-hero_pt_desk lg:pb-hero_pb_desk'
  )
  const [copied, setCopied] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  function encode(data) {
    const formData = new FormData()
    for (const key of Object.keys(data)) {
      formData.append(key, data[key])
    }
    return formData
  }
  function handleChange(e) {
    setUserEmail(e.target.value)
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    try {
      await fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          email: userEmail,
        }),
      })
      setUserEmail('')
      form.reset()
    } catch (error) {
      alert(error)
    }
  }

  function copy() {
    setCopied(true)
    const el = document.createElement('input')
    el.value = window.location.href
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  useEffect(() => {
    let timer
    if (copied) {
      timer = setTimeout(() => setCopied(false), 1000)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [copied])

  const shareButtons = (
    <>
      <FacebookShareButton
        url={`https://anglebrackets.io/${slug?.current}/`}
        quote={title}
      >
        <div>
          <Icon icon="facebook-blogs-green-icon" iconHeight={20} iconWidth={20} />
        </div>
      </FacebookShareButton>
      <LinkedinShareButton
        url={`https://anglebrackets.io/${slug?.current}/`}
        quote={title}
      >
        <div>
          <Icon icon="linkedin-blogs-green-icon" iconHeight={19.05} iconWidth={20} />
        </div>
      </LinkedinShareButton>
      <TwitterShareButton
        url={`https://anglebrackets.io/${slug?.current}/`}
        quote={title}
      >
        <div>
          <img src={twitterIconGreen} className='w-[18.22] h-[14.81]' alt='twitter-blogs-green-icon'/>
        </div>
      </TwitterShareButton>
      <button onClick={copy} className="relative w-[20px] h-[20px  ]">
        <p
          className={clsx(
            'absolute w-[89px] text-gray_900 fontFamily2 animate-waving-hand font-bold  text-xs bottom-[-30px] left-[-70px] sm:left-[-50px] lg:left-[-30px]',
            copied ? 'opacity-1' : 'opacity-0 '
          )}
        >
          {copied ? 'Link is Copied' : ''}
        </p>
        <img src={LinkIconGreen} className='w-[18.22] h-[14.81]' alt='twitter-blogs-green-icon'/>
      </button>
    </>
  )

  return (
    <section className={blogPostSectionClasses} data-testid="blog-post-section">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1140px] px-[24px] lg:px-0 mx-auto">
          <div className="flex flex-col gap-y-[56px] lg:gap-y-0 items-center justify-between lg:flex-row">
            <div className="flex flex-col gap-6">
              <p className="text-[10px] leading-[10px] w-fit bg-primary_green text-secondary_gray opacity-100 font-bold px-3 py-[5px] rounded-full">
                {category}
              </p>
              <Heading
                type="h1"
                otherClasses="font-satoshi text-white text-[30px] leading-[41px]"
              >
                {title}
              </Heading>
              <p className=" text-[#F7F8F8] leading-[22px] opacity-50 text-[16px] font-satoshi">
                {name}
              </p>
              
                <div className="flex flex-row gap-3">
                  <Icon icon="calendar-icon" iconHeight={20} iconWidth={18} />
                  <p className="text-[#F7F8F8] leading-[22px] opacity-50 text-[16px] font-normal font-satoshi">
                    {publishedAt}
                  </p>
                </div>
                <div className="flex items-center w-fit gap-6 mb-[40px]">
                  {shareButtons}
                </div>
            </div>
            <div className="md:w-[50%] flex justify-end">
              <Image
                imageData={desktopImage}
                otherClasses="rounded-[10px]"
              ></Image>
            </div>
          </div>
          <div className="mt-[56px]">
            <RichText
              richText={_rawBody}
              otherClasses="blogsPostSection_rawbody"
            />
          </div>
        </div>
        <div className="max-w-[800px] mt-14 mx-auto w-full bg-secondary_gray pt-[72px]  pb-[80px] px-10 rounded-3xl">
        <Heading
          type="h4"
          otherClasses="font-montserrat font-bold text-white w-fit mx-auto mb-6 text-center "
        >
          Subscribe Newsletter
        </Heading>
        <p className="text-base font-source_sans_pro text-gray-50 mb-6 text-center max-w-[580px] mx-auto  ">
          Subscribe to our newsletter, so you can be the first to find out the
          latest Blogs
        </p>
        <form
          name={'newsletter-subscription'}
          method="post"
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row sm:gap-0 items-center justify-center w-full "
        >
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="max-w-[352px] w-full  h-12 focus:border-[#B3D5E7] focus:border-[3px] outline-0 pl-4 text-base rounded-l-full "
          />
          <button className="font-satoshi font-bold text-secondary_gray  text-sm leading-[18.9px]  px-[19px] py-[15px] flex gap-2 w-fit justify-center items-center text-center  bg-primary_green rounded-r-full button_primary_box_shadow ">
            Subscribe
          </button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default BlogPostSection
