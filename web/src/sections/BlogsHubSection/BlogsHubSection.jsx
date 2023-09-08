import React from 'react'
import clsx from 'clsx'
import BlogsHubCard from '../../components/BlogsHubCard/BlogsHubCard'
import { graphql, useStaticQuery } from 'gatsby'
export const BlogsHubSection = ({ otherClasses }) => {
  const blogsHubSectionClasses = clsx(otherClasses,"py-section_py_mob lg:py-section_py_desk bg-secondary_gray_300   ")

  const {
    allSanityBlogs: { nodes },
  } = useStaticQuery(graphql`
  {
    allSanityBlogs {
      nodes {
        title
        seoTitle
        slug {
          current
        }
        desktopImage {
          ...CustomImage
        }
        publishedAt
        authors {
          name
        }
        blogCategory {
          category
        }
        description
      }
    }
  }
  `)


// console.log("allblogs",nodes);

  return (
    <section className={blogsHubSectionClasses} data-testid="blogs-hub-section">
      <div className="max-w-[1400px] mx-auto lg:px-[100px] xl:px-[150px] px-[20px]">
       
       <div>
        {
          nodes.map((nodes)=>{
            return(
              <BlogsHubCard {...nodes}/>
            )
          })
        }
       </div>

      </div>
    </section>
  )
}

export default BlogsHubSection

export const query = graphql`
  fragment BlogsHubSectionReference on SanityBlogsHubSectionReference {
    __typename
    identifier
  }
`
