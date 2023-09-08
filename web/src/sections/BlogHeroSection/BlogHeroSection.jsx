import React from 'react'
import clsx from 'clsx'
import RichText from '../../components/RichText/RichText'
import '../MiniHeroSection/miniherosection.scss'

export const BlogHeroSection = ({
  otherClasses,_rawSubText,
  isdarkTheme
}) => {
  const blogHeroSectionClasses = clsx(otherClasses,' max-w-[14404px] mx-auto px-6 pt-hero_pt_mob pb-hero_pb_mob lg:pt-hero_pt_desk lg:pb-hero_pb_desk  lg:px-[100px] xl:px-[140px]' ,isdarkTheme ? 'bg-secondary_gray_300' : 'bg-secondary_gray');
  
  return (
    <section className={blogHeroSectionClasses} data-testid='blog-hero-section'>
      <div className="miniherosection_richtext mx-auto max-w-[1011px]">
        <RichText richText={_rawSubText} />
      </div>
    </section>
  );
};

export default BlogHeroSection;
