import React from 'react'
import clsx from 'clsx'
import './reactcookieconsent.scss'
import CookieConsent from 'react-cookie-consent'
import { CustomToast } from '../../utils/helpers'

export const ReactCookieConsent = ({
  otherClasses
}) => {

  const reactCookieConsentClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={reactCookieConsentClasses} data-testid='react-cookie-consent'>

       <div className='cookie_consent_wrapper'>
        <CookieConsent
          location="bottom"
          buttonText="Accept All"
          declineButtonText="Reject All"
          enableDeclineButton
          onDecline={() => {
            CustomToast("You Have Declined the Cookies")
          }}
          cookieName="myAwesomeCookieName2"
          style={{ background: '#2B373B',padding:"0px 100px" }}
          buttonStyle={{fontFamily:"satoshi",fontSize:"16px",fontWeight:"700", backgroundColor: '#1aff79', fontSize: '13px',marginRight:"0px", padding: '4px 10px',borderRadius:'7px',display:'flex',alignItems:'center'}}
          declineButtonStyle={{border:"1px solid #1aff79",background:"transparent",fontFamily:"satoshi", marginLeft:"0px",fontSize:"14px",fontWeight:"400" , borderRadius:"7px",padding: '5px 10px' }}
          expires={1}
         containerClasses='mx-auto lg:!px-[100px] !py-4 xl:!px-[150px] md:!px-8 !px-6 font-satoshi !translate-x-[-50%] !left-2/4 max-w-[1440px]'
        >
          AngleBrackets uses cookies to enhance the user experience.{' '}
        </CookieConsent>
        </div>
    </div>
  )
}

export default ReactCookieConsent
 