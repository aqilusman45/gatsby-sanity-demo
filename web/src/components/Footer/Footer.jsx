import React from 'react'
import clsx from 'clsx'
import Icon from '../Icon/Icon'
import './footer.scss'
import { Link } from 'gatsby'
import yoututbeGreen from './../../images/angleBrackets-icons/youtube-green-icon.svg'
import yoututbeWhite from './../../images/angleBrackets-icons/youtube-icon.svg'
import instagramGreen from './../../images/angleBrackets-icons/instagram-green-icon.svg'
import instagramWhite from './../../images/angleBrackets-icons/instagram-icon.svg'

export const Footer = ({ otherClasses, services, technologies }) => {
  const footerClasses = clsx(otherClasses, 'bg-secondary_gray')
  const year = new Date().getFullYear()

  const technologieslength = technologies?.length
  const firsthalfTechnologies = technologies.slice(0, technologieslength / 2)
  const secondHalfTechnologies = technologies.slice(
    technologieslength / 2,
    technologieslength
  )

  return (
    <footer className={footerClasses} data-testid="footer">
      <div className="max-w-[1440px] mx-auto w-full pt-section_py_mob lg:pt-section_py_desk px-6 lg:px-[100px] xl:px-[150px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 mb-[72px] lg:mb-[82px]">
          <div className=" lg:col-span-2 mb-14 lg:mb-0">
            <Link
              className="class_logo font-satoshi font-bold leading-[40.5px] tracking-[-0.5 px] text-white text-[30px]"
              to="/"
            >
              <Icon iconHeight={34} iconWidth={168} icon="logo-white" />
            </Link>
            <div className="flex flex-col gap-3">
              <p className=" mt-10 w-full sm:max-w-[300px]  text-base font-satoshi font-normal text-light_white opacity-50">
                At AngleBrackets, we're not just another software company. we're
                your ultimate technological partner. With a passion for
                innovation and a drive for excellence.
              </p>
              <div className="flex flex-col gap-3">
                <address className=" not-italic w-full sm:max-w-[300px]  text-base font-satoshi font-normal text-light_white opacity-50">
                  <a
                    href="mailto:info@anglebrackets.io"
                    className="font-satoshi text-[17px] mb-3 mt-3 font-bold  group hover:text-primary_green_light  text-white  flex items-center"
                  >
                    <span className="mr-2 flex items-center  bg-white group-hover:bg-primary_green_light mail-icon"></span>
                    info@anglebrackets.io
                  </a>
                  <a
                    href="tel:+19043263050"
                    className="font-satoshi text-[17px] font-bold mb-3 group hover:text-primary_green_light  text-white  flex items-center"
                  >
                    <span className="mr-2 flex items-center  bg-white group-hover:bg-primary_green_light phone-icon"></span>
                    +1 (904) 326-3050
                  </a>
                </address>
              </div>
            </div>
          </div>
          <ul className="mb-8 lg:mt-[74px] xl:mb-0">
            <h6 className="mb-4 text-lg lg:text-sm font-bold leading-[24.3px] lg:leading-[18.9px] font-satoshi text-primary_green">
              Company
            </h6>
            <li className="mb-2">
              <Link
                to="/portfolio"
                className=" hover:text-white hover:opacity-100 font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal"
              >
                Portfolio
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/reviews"
                className="hover:text-white hover:opacity-100 font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal"
              >
                Testimonial
              </Link>
            </li>
           
            <li className="mb-2">
              <Link
                to="/meet-the-team"
                className="hover:text-white hover:opacity-100 font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal"
              >
                Team
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/blogs"
                className="hover:text-white hover:opacity-100 font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal"
              >
                Blogs
              </Link>
            </li>
          </ul>
          <ul className=" sm:col-span-2 mb-8 lg:mt-[74px] xl:mb-0">
            <h6 className="col-span-2 mb-4 text-lg lg:text-sm font-bold leading-[24.3px] lg:leading-[18.9px] font-satoshi text-primary_green">
              Technologies
            </h6>
            <div className="grid grid-cols-2 lg:flex lg:gap-28 lg:flex-row">
              <div className="flex flex-col">
                {firsthalfTechnologies.map(({ title, slug: { current } }) => {
                  return (
                    <li className="mb-2 w-fit">
                      <Link
                        to={`/${current}`}
                        className="hover:text-white whitespace-nowrap  hover:opacity-100  font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal"
                      >
                        {title.charAt(0).toUpperCase() + title.slice(1)}
                      </Link>
                    </li>
                  )
                })}
              </div>
              <div className="flex flex-col">
                {secondHalfTechnologies.map(({ title, slug: { current } }) => {
                  return (
                    <li className="mb-2 w-fit">
                      <Link
                        to={`/${current}`}
                        className="hover:text-white hover:opacity-100  font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal"
                      >
                        {title.charAt(0).toUpperCase() + title.slice(1)}
                      </Link>
                    </li>
                  )
                })}
              </div>
            </div>
          </ul>
          {/* <ul>
            <h6 className="mb-4 text-lg lg:text-sm font-bold leading-[24.3px] lg:leading-[18.9px] font-satoshi text-primary_green">
              Industries
            </h6>
            <li className="mb-2">
              <Link className="font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal">
                Finance
              </Link>
            </li>
            <li className="mb-2">
              <Link className="font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal">
                Health
              </Link>
            </li>
            <li className="mb-2">
              <Link className="font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal">
                Automotive
              </Link>
            </li>
            <li className="mb-2">
              <Link className="font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal">
                Logistics
              </Link>
            </li>
            <li className="mb-2">
              <Link className="font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal">
                Travel
              </Link>
            </li>
            <li className="mb-2">
              <Link className="font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal">
                Non Profit
              </Link>
            </li>
            <li className="mb-2">
              <Link className="font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal">
                Retails
              </Link>
            </li>
          </ul> */}
          <ul>
            <h6 className="mb-4 lg:mt-[74px] text-lg lg:text-sm font-bold leading-[24.3px] lg:leading-[18.9px] font-satoshi text-primary_green">
              Services
            </h6>
            {services.map(({ title, slug: { current } }) => {
              return (
                <li className="mb-2">
                  <Link
                    to={`/${current}`}
                    className="hover:text-white hover:opacity-100 font-satoshi text-base lg:text-sm leading-[21.6px] lg:leading-[19px] text-white opacity-50 font-normal"
                  >
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-[100px] xl:px-[150px] flex flex-col gap-8 bg-[#001E2B] lg:bg-transparent lg:gap-0 lg:flex-row lg:justify-between items-center py-section_py_mob lg:pb-section_py_desk lg:pt-0">
        <span className="h-[1px] absolute top-0 left-0 w-full mobile_gradient_line block lg:hidden"></span>

        <div className="text-white font-normal font-satoshi text-sm leading-[18.9px]">
          Copyright © {year} AngleBrackets. All rights reserved.
        </div>
        <div className="flex  items-center gap-[15px]">
          <div className="group">
            <Link
              to="https://github.com/angle-brackets-io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                otherClasses="lg:block hidden group-hover:hidden"
                icon="footer-github-white-icon"
                iconHeight={19}
                iconWidth={19}
              />
            </Link>
            <Link
              to="https://github.com/angle-brackets-io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                otherClasses="lg:hidden  group-hover:block"
                icon="footer-github-green-icon"
                iconHeight={19}
                iconWidth={19}
              />
            </Link>
          </div>
          <span className="h-[17px] w-[1px] bg-white block"></span>
          <div className="group">
            <Link
              to="https://twitter.com/anglebracket_s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                otherClasses="lg:block hidden  group-hover:hidden"
                icon="footer-twitter-white-icon"
                iconHeight={19}
                iconWidth={19}
              />
            </Link>
            <Link
              to="https://twitter.com/anglebracket_s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                otherClasses="lg:hidden  group-hover:block"
                icon="footer-twitter-green-icon"
                iconHeight={19}
                iconWidth={19}
              />
            </Link>
          </div>
          <span className="h-[17px] w-[1px] bg-white block"></span>
          <div className="group">
            <Link
              to="https://www.linkedin.com/company/angle-brackets-io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                otherClasses="lg:block hidden  group-hover:hidden"
                icon="linkedin-icon"
                iconHeight={19}
                iconWidth={19}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/company/angle-brackets-io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                otherClasses="lg:hidden  group-hover:block"
                icon="linkedin-green-icon"
                iconHeight={19}
                iconWidth={19}
              />
            </Link>
          </div>
          <span className="h-[17px] w-[1px] bg-white block"></span>
          <div className="group">
            <Link
              to="https://www.instagram.com/anglebrackets.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="lg:block hidden w-[20px] h-[20px]  group-hover:hidden"
                alt="instagram-icon-white"
                src={instagramWhite}
              />
            </Link>
            <Link
              to="https://www.instagram.com/anglebrackets.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="lg:hidden block w-[20px] h-[20px]  group-hover:block"
                alt="instagram-icon-green"
                src={instagramGreen}
              />
            </Link>
          </div>
          <span className="h-[17px] w-[1px] bg-white block"></span>
          <div className="group">
            <Link
              to="https://www.youtube.com/@anglebrackets-io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="lg:block  group-hover:hidden hidden w-[20px] h-[20px]"
                alt="youtube-icon"
                src={yoututbeWhite}
              />
            </Link>
            <Link
              to="https://www.youtube.com/@anglebrackets-io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="lg:hidden group-hover:block block w-[20px] h-[20px]"
                alt="youtube-green-icon"
                src={yoututbeGreen}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
