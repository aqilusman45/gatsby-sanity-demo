import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import './navbar.scss'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Heading from '../Heading/Heading'
import { useMediaPredicate } from 'react-media-hook'
import { hideBodyScroll, showBodyScroll } from '../../utils/helpers'
import { useRef } from 'react'

export const Navbar = ({
  otherClasses,
  services,
  frontendNodes,
  backendNodes,
  MobileAppNodes,
  blogNodes,
}) => {
  const navbarClasses = clsx(
    otherClasses,
    'fixed top-0 translate-x-[-50%] left-2/4 z-20 w-full bg-[#001E2B]'
  )

  const [toggle, setToggle] = useState(false)
  const [mobileNav, setMobileNav] = useState('')

  const biggerThan400 = useMediaPredicate('(min-width: 1024px)')
  const btnRef = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggle && btnRef.current && !btnRef.current.contains(e.target)) {
        setToggle(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [toggle])

  useEffect(() => {
    if (biggerThan400 === true) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }, [biggerThan400])

  if (biggerThan400 === false && toggle === true) {
    hideBodyScroll()
  } else {
    showBodyScroll()
  }

  const toggleNav = () => {
    setToggle(!toggle)
  }
  const toggleMobileNav = (val) => {
    if (mobileNav !== val) {
      setMobileNav(val)
    } else {
      setMobileNav('')
    }
  }

  return (
    <nav className={navbarClasses} data-testid="navbar">
      {/* <div className='bg-[#21313C] py-[15px] px-4 lg:px-0'>
      <div className='flex  justify-between md:justify-center lg:gap-4 items-center max-w-[1440px] mx-auto w-full  lg:relative'>
        <p className='text-white text-[11px] lg:text-[14px] leading-[18px] font-medium font-inter'>🎉 Best Design & Development Agency</p> 
        <button className='text-white whitespace-nowrap flex  gap-1 lg:gap-2 ml-1  font-medium items-center text-[11px] font-inter leading-[10px] lg:text-[14px] lg:leading-[17px]'>
        View Services  <p className='text-[20px] font-medium mb-2 lg:mb-0'>&#x2192;</p> 
        </button>
      </div>
      </div> */}
      <div
        className="flex justify-between items-center max-w-[1440px] mx-auto w-full px-6 py-5 lg:py-0 lg:px-[100px] xl:px-[150px] lg:relative"
        ref={btnRef}
      >
        <Link
          to="/"
          className="class_logo font-satoshi font-bold leading-[27px] lg:leading-[33.75px] tracking-[-0.5 px] text-white text-xl lg:text-[25px] "
        >
          <Icon iconHeight={34} iconWidth={168} icon="logo-white" />
        </Link>
        <div
          className={clsx(
            'navbar_list_items_container -mt-[56px] lg:mt-0 lg:flex items-center gap-6 lg:gap-8 lg:static flex-col lg:flex-row absolute lg:w-auto w-full top-[130px] left-0 lg:left-auto lg:top-auto bg-[#21313C] lg:bg-transparent navbar_menu_height overflow-auto lg:overflow-visible',
            toggle ? 'flex' : 'hidden'
          )}
        >
          <ul className="flex lg:items-center flex-col lg:flex-row lg:gap-8 w-full lg:w-auto">
            <li className="flex items-center lg:h-[80px] ">
              <Link
                to="/"
                className="px-6 py-4 lg:px-0 lg:py-0 hover:text-primary_green lg:p-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white w-full lg:w-auto "
              >
                Home
              </Link>
            </li>
            <li className="flex lg:items-center lg:flex-row flex-col group nav-link-container lg:h-[80px] lg:bg-transparent">
              <div className="hidden lg:block">
                <Link
                  to="/services"
                  className="cursor-pointer group-hover:text-primary_green px-6 py-4 lg:px-0 lg:py-0 lg:p-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white flex items-center justify-between lg:justify-start gap-2 w-full lg:w-auto"
                >
                  Services
                  <Icon otherClasses="nav-dropdown-icon" />
                </Link>
              </div>

              <button
                onClick={() => toggleMobileNav('services')}
                className="lg:hidden px-6 py-4 lg:px-0 lg:py-0 lg:p-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white flex items-center justify-between lg:justify-start gap-2 w-full lg:w-auto"
              >
                Services
                <Icon
                  iconHeight={24}
                  iconWidth={24}
                  icon="navbar-white-arrow-down"
                />
              </button>

              <div
                className={clsx(
                  'px-6 pb-12 pt-3 lg:p-0 lg:group-hover:block  lg:absolute lg:translate-x-[-50%] lg:top-20 lg:left-2/4 w-full menu_box_shadow lg:max-w-[600px] xl:max-w-[794px]',
                  mobileNav === 'services' ? 'block ' : 'hidden bg-[#21313C]'
                )}
              >
                <ul className=" lg:p-[30px] gap-y-3 gap-x-2 grid grid-cols-1 md:grid-cols-3 lg:bg-[#21313C80] lg:backdrop-blur-[100px]">
                  {services.map(({ title, slug: { current } }) => {
                    return (
                      <li className="">
                        <Link
                          to={`/services/${current}`}
                          className=" hover:text-primary_green text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white max-w-max relative navbar_list_underline"
                        >
                          {title.charAt(0).toUpperCase() + title.slice(1)}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <span className="h-[1px] w-full gradient_line block my-6 lg:my-0"></span>
                <div className="lg:p-[30px] flex flex-col lg:flex-row lg:items-center justify-between lg:bg-[#001E2B0D] lg:backdrop-blur-[50px] gap-4 lg:gap-10">
                  <div>
                    <Heading
                      type="h5"
                      otherClasses="font-bold text-white text-lg lg:text-[22px] leading-[24.3px] lg:leading-[29.7px] mb-2"
                    >
                      AngleBrackets Services
                    </Heading>
                    <p className="text-white text-sm leading-[18.9px] font-normal font-satoshi opacity-50">
                      Benefit from our top-notch IT services to build efficient
                      tailored-fit software with a high ROI
                    </p>
                  </div>
                  <Link
                    to="/services"
                    className=" md:w-[217px] h-fit px-4 flex gap-2 w-fit justify-center items-center py-[10.5px] text-sm leading-[18.9px] text-center font-bold font-satoshi bg-primary_green rounded-[5px] button_primary_box_shadow"
                  >
                    {' '}
                    Learn More{' '}
                  </Link>
                </div>
              </div>
            </li>
            <li className="flex lg:items-center lg:flex-row flex-col group nav-link-container lg:h-[80px]  lg:bg-transparent">
              <button
                onClick={() => toggleMobileNav('technologies')}
                className="lg:hidden px-6 py-4 lg:px-0 lg:py-0 lg:p-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white flex items-center justify-between lg:justify-start gap-2 w-full lg:w-auto"
              >
                Technologies
                <Icon
                  iconHeight={24}
                  iconWidth={24}
                  icon="navbar-white-arrow-down"
                />
              </button>
              <div className="hidden lg:block">
                <Link
                  to="/technologies"
                  className="cursor-pointer group-hover:text-primary_green px-6 py-4 lg:px-0 lg:py-0 lg:p-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white flex items-center justify-between lg:justify-start gap-2 w-full lg:w-auto"
                >
                  Technologies
                  <Icon otherClasses="nav-dropdown-icon" />
                </Link>
              </div>

              <div
                className={clsx(
                  'px-6 pb-12 pt-3 lg:p-0 lg:group-hover:block lg:absolute lg:translate-x-[-50%] lg:top-20 lg:left-2/4 w-full menu_box_shadow lg:max-w-[600px] xl:max-w-[794px]',
                  mobileNav === 'technologies'
                    ? 'block '
                    : 'hidden bg-[#21313C]'
                )}
              >
                <ul className=" lg:p-[30px] gap-y-3 gap-x-2 grid grid-cols-2 md:grid-cols-3 lg:bg-[#21313C80] lg:backdrop-blur-[100px]">
                  <li className="">
                    <ul className="flex flex-col gap-3">
                      <Heading
                        type="h6"
                        otherClasses="font-satoshi font-bold text-primary_green text-base lg:text-sm leading-[21.6px] lg:leading-[18.9px]"
                      >
                        Front-End
                      </Heading>

                      {frontendNodes.map(({ title, slug: { current } }) => {
                        return (
                          <li className="">
                            <Link
                              to={`/technologies/${current}`}
                              className=" hover:text-primary_green_light  text-base lg:text-sm font-medium font-satoshi max-w-max relative navbar_list_underline leading-[21.6px] lg:leading-[18.9px] text-white "
                            >
                              {title.charAt(0).toUpperCase() + title.slice(1)}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                  <li className="">
                    <ul className="flex flex-col gap-3 ">
                      <Heading
                        type="h6"
                        otherClasses="font-satoshi font-bold text-primary_green text-base lg:text-sm leading-[21.6px] lg:leading-[18.9px]"
                      >
                        Back-End
                      </Heading>

                      {backendNodes.map(({ title, slug: { current } }) => {
                        return (
                          <li className="">
                            <Link
                              to={`/technologies/${current}`}
                              className=" hover:text-primary_green_light  text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white max-w-max relative navbar_list_underline"
                            >
                              {title.charAt(0).toUpperCase() + title.slice(1)}
                            </Link>
                          </li>
                        )
                      })}
                      {/* <li>
                        <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                          Node
                        </Link>
                      </li>
                      <li>
                        <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                          Ruby
                        </Link>
                      </li>
                      <li>
                        <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                          Golang{' '}
                          <span className="text-primary_green underline">
                            {' '}
                            +4 More
                          </span>
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  <li className="">
                    <ul className="flex flex-col gap-3 pt-3 lg:pt-0">
                      <Heading
                        type="h6"
                        otherClasses="font-satoshi font-bold text-primary_green text-base lg:text-sm leading-[21.6px] lg:leading-[18.9px]"
                      >
                        Mobile Application
                      </Heading>

                      {MobileAppNodes.map(({ title, slug: { current } }) => {
                        return (
                          <li className="">
                            <Link
                              to={`/technologies/${current}`}
                              className=" hover:text-primary_green_light  text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white max-w-max relative navbar_list_underline"
                            >
                              {title.charAt(0).toUpperCase() + title.slice(1)}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                </ul>
                <span className="h-[1px] w-full gradient_line block my-6 lg:my-0"></span>
                <div className="lg:p-[30px] flex flex-col lg:flex-row lg:items-center justify-between lg:bg-[#001E2B0D] lg:backdrop-blur-[50px] gap-4 lg:gap-10">
                  <div>
                    <Heading
                      type="h5"
                      otherClasses="font-bold text-white text-lg lg:text-[22px] leading-[24.3px] lg:leading-[29.7px] mb-2"
                    >
                      AngleBrackets Technologies
                    </Heading>
                    <p className="text-white text-sm leading-[18.9px] font-normal font-satoshi opacity-50">
                      Collaborate with AngleBracket's IT experts to build
                      outstanding custom software via an extensive selection of
                      frameworks
                    </p>
                  </div>
                  <Link
                    to="/technologies"
                    className=" md:w-[217px] h-fit px-4 flex gap-2 w-fit justify-center items-center py-[10.5px] text-sm leading-[18.9px] text-center font-bold font-satoshi bg-primary_green rounded-[5px] button_primary_box_shadow"
                  >
                    {' '}
                    Learn More{' '}
                  </Link>
                </div>
              </div>
            </li>
            {/* <li className="flex lg:items-center lg:flex-row flex-col group  lg:h-[80px] hover:bg-[#001E2B66] lg:bg-transparent">
              <Link className="p-6 lg:p-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white flex items-center justify-between lg:justify-start gap-2 w-full lg:w-auto">
                Industries
                <Icon
                  iconHeight={24}
                  iconWidth={24}
                  icon="navbar-white-arrow-down"
                />
              </Link>
              <ul className="px-6 pb-12 pt-3 group-hover:grid hidden lg:absolute  lg:top-20 lg:right-[133px] w-full menu_box_shadow lg:max-w-[549px] lg:p-[50px] gap-y-6  grid-cols-2 md:grid-cols-2 lg:bg-[#21313C80] lg:backdrop-blur-[100px]">
                <li className="">
                  <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                    Finance
                  </Link>
                </li>
                <li className="">
                  <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                    Marketing
                  </Link>
                </li>
                <li className="">
                  <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                    E-Commerce
                  </Link>
                </li>
                <li className="">
                  <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                    Technology
                  </Link>
                </li>
                <li className="">
                  <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                    Education
                  </Link>
                </li>
                <li className="">
                  <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                    Real Estate
                  </Link>
                </li>
                <li className="">
                  <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                    Gaming
                  </Link>
                </li>
                <li className="">
                  <Link className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white">
                    Retail
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="flex relative lg:items-center lg:flex-row flex-col group nav-link-container lg:h-[80px] lg:bg-transparent">
              <button
                onClick={() => toggleMobileNav('company')}
                className="lg:hidden px-6 py-4 lg:px-0 lg:py-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white flex items-center justify-between lg:justify-start gap-2 w-full lg:w-auto"
              >
                Company
                <Icon
                  iconHeight={24}
                  iconWidth={24}
                  icon="navbar-white-arrow-down"
                />
              </button>
              <div className="hidden lg:block">
                <Link
                  to="#"
                  className="cursor-pointer group-hover:text-primary_green px-6 py-4 lg:px-0 lg:py-0 lg:p-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white flex items-center justify-between lg:justify-start gap-2 w-full lg:w-auto"
                >
                  Company
                  <Icon otherClasses="nav-dropdown-icon" />
                </Link>
              </div>

              <div>
                <ul
                  className={clsx(
                    'px-6  pb-1 pt-1  lg:group-hover:grid lg:absolute lg:top-20 lg:right-0 w-full menu_box_shadow lg:min-w-[250px] lg:p-[30px] gap-y-2 lg:gap-y-3  grid-cols-2 lg:grid-cols-1 lg:bg-[#21313C] lg:backdrop-blur-[100px] ',
                    mobileNav === 'company'
                      ? 'flex flex-col '
                      : 'hidden bg-[#21313C]'
                  )}
                >
                 
                  <li>
                    <Link
                      to="/reviews"
                      className="hover:text-primary_green_light text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white max-w-max relative navbar_list_underline"
                    >
                      Client Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      className="hover:text-primary_green_light text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white max-w-max relative navbar_list_underline"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/meet-the-team"
                      className="hover:text-primary_green_light text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white max-w-max relative navbar_list_underline"
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex lg:items-center lg:flex-row flex-col group nav-link-container lg:h-[80px] lg:bg-transparent">
              <div className="hidden lg:block">
                <Link
                  to="/blogs"
                  className="cursor-pointer group-hover:text-primary_green px-6 py-4 lg:px-0 lg:py-0 lg:p-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white flex items-center justify-between lg:justify-start gap-2 w-full lg:w-auto"
                >
                  Blogs
                  <Icon otherClasses="nav-dropdown-icon" />
                </Link>
              </div>
              <button
                onClick={() => toggleMobileNav('blogs')}
                className="lg:hidden px-6 py-4 lg:px-0 lg:py-0 lg:p-0 text-base lg:text-sm font-normal font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white flex items-center justify-between lg:justify-start gap-2 w-full lg:w-auto"
              >
                Blogs
                <Icon
                  iconHeight={24}
                  iconWidth={24}
                  icon="navbar-white-arrow-down"
                />
              </button>
              <div
                className={clsx(
                  'px-6 pb-12 pt-3 lg:p-0 lg:group-hover:block  lg:absolute lg:translate-x-[-50%] lg:top-20 lg:left-2/4 w-full menu_box_shadow lg:max-w-[600px] xl:max-w-[794px]',
                  mobileNav === 'blogs' ? 'block' : 'hidden bg-[#21313C]'
                )}
              >
                <ul className=" lg:p-[30px] gap-y-3 gap-x-3 grid grid-cols-1 md:grid-cols-3 lg:bg-[#21313C80] lg:backdrop-blur-[100px]">
                  {blogNodes.map(({ category }) => {
                    return (
                      <li>
                        <Link
                          to={`/blogs/${category
                            .toLowerCase()
                            .replace(/ /g, '-')
                            .replace(/[^\w-]+/g, '')}`}
                          className="text-base lg:text-sm font-medium font-satoshi leading-[21.6px] lg:leading-[18.9px] text-white hover:text-primary_green_light max-w-max relative navbar_list_underline"
                        >
                          {category}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <span className="h-[1px] w-full gradient_line block my-6 lg:my-0"></span>
                <div className="lg:p-[30px] flex flex-col lg:items-center lg:flex-row justify-between lg:bg-[#001E2B0D] lg:backdrop-blur-[50px] gap-4 lg:gap-10">
                  <div>
                    <Heading
                      type="h5"
                      otherClasses="font-bold text-white text-lg lg:text-[22px] leading-[24.3px] lg:leading-[29.7px] mb-2"
                    >
                      AngleBrackets Blogs
                    </Heading>
                    <p className="text-white text-sm leading-[18.9px] font-normal font-satoshi opacity-50">
                      Embark on a Journey of Knowledge and Insight with
                      AngleBrackets Blog: Unveiling Tech Trends, Expert IT
                      Services, and Custom Software Excellence
                    </p>
                  </div>
                  <Link
                    to="/blogs"
                    className=" md:w-[217px] h-fit px-4 flex gap-2 w-fit justify-center items-center py-[10.5px] text-sm leading-[18.9px] text-center font-bold font-satoshi bg-primary_green rounded-[5px] button_primary_box_shadow"
                  >
                    {' '}
                    Learn More{' '}
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <span className="h-6 w-[1px] bg-white lg:block hidden"></span>
          <div className="px-6 lg:px-0 w-full lg:w-auto">
            <Button
              variant="primary"
              label="Contact Us"
              otherClasses="lg:w-auto w-full"
              form="contact-us"
            />
          </div>
          <span className="h-[1px] w-full mobile_gradient_line block lg:hidden"></span>
        </div>
        <button onClick={() => toggleNav()} className="lg:hidden">
          <Icon
            icon={toggle ? 'navbar-cancel-icon' : 'navbar-hamburger'}
            iconHeight={24}
            iconWidth={24}
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
