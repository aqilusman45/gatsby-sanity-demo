import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import Image from '../../components/Image/Image'
import BlogCard from '../../components/BlogCard/BlogCard'
import Heading from '../../components/Heading'

export const BlogsSection = ({ otherClasses, heading, blogs, allBlogs }) => {
  const blogsSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray_300 py-section_py_mob lg:px-[100px] xl:px-[150px] px-[18px] pb-[130px] lg:py-section_py_desk'
  )

  const allCategory = [
    ...new Set(allBlogs.map(({ blogCategory }) => blogCategory?.category)),
  ]

  const recentBlogs = allBlogs.slice(0, 3)

  return (
    <section className={blogsSectionClasses} data-testid="blogs-section">
      <div className="max-w-[1140px]  mx-auto  px-2 lg:px-0 pb-10">
        <Heading
          type="h2"
          otherClasses="text-center mb-10 PortfolioSection_heading mb-3"
        >
          {heading}
        </Heading>
        <div className="flex flex-col md:justify-between gap-4 md:flex-row ">
          <div
            className={clsx(
              'grid grid-cols-1  w-full ',
              blogs.length === 1 ? 'lg:grid-cols-1 ' : ' lg:grid-cols-2'
            )}
          >
            {blogs?.length > 0 &&
              blogs.map((nodes, index) => {
                return (
                  <div className="px-2 pb-10">
                    <BlogCard
                      key={nodes.title}
                      {...nodes}
                      index={index}
                      otherClasses=""
                    />
                  </div>
                )
              })}
          </div>
          <div className="gap-y-3 lg:max-w-[300px] max-w-[400px] sticky  top-20 h-fit w-full hidden lg:block ">
            <div className="bg-secondary_gray rounded-3xl p-[20px]">
              <p className="text-[24px] font-bold font-satoshi text-white">
                Category
              </p>

              <div className="flex flex-col mt-5">
                {allCategory.map((category) => {
                  return (
                    <Link
                      to={`/blogs/${category
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')}`}
                      className="text-white font-satoshi text-[16px] opacity-90 py-2 font-medium hover:text-primary_green_light "
                    >
                      {category}
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className="mt-5 bg-secondary_gray rounded-3xl  p-[20px]">
              <p className="text-[24px] font-bold font-satoshi text-white">
                Recent Posts
              </p>
              {recentBlogs.map(({ title, desktopImage, slug, publishedAt }) => {
                return (
                  <div className="flex items-center gap-3 mt-6 my-5">
                    <div className="flex ">
                      <Image
                        imageData={desktopImage}
                        objectFit="cover"
                        otherClasses="rounded-lg h-20 w-20"
                      />
                    </div>
                    <div>
                      <p className="text-white opacity-50 mb-2 font-satoshi">
                        {publishedAt}
                      </p>
                      <Link
                        className="text-white pt-2 font-satoshi text-[16px] opacity-90 py-2 font-medium hover:text-primary_green_light"
                        to={`/${slug.current}`}
                      >
                        {title.slice(0, 35).concat('...')}
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogsSection
