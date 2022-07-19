import Link from 'next/link';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Index() {
  return (
    <div className="flex md:flex-none">
      <div className="lg:w-1/6 md:w-1/6 sm:block hidden pl-4ok">
        <Sidebar />
      </div>
      <div className="w-screen sm:w-5/6">
        <Navbar />
        <section className="h-max lg:mx-6 md:mb-16 mb-8 mt-8">
          <div className="card-main bg-onPrimary bg-opacity-70 lg:px-16 lg:py-14 sm:px-12 sm:py-10 px-8 py-8">
            <h1 className="text-primary sm:text-6xl text-4xl font-bold mb-12">Terms of Service</h1>
            <h2 className="text-primary sm:text-3xl text-2xl font-medium mb-12">
              Last updated: 28 of March 2022
            </h2>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Introduction</h6>
              <p className="mb-4">
                Welcome to PT. KUDOKU FINANSIAL INDONESIA (“Company”, “we”, “our”, “us”)! As you
                have just clicked our Terms of Service, please pause, grab a cup of coffee and
                carefully read the following pages. It will take you approximately 20 minutes.
              </p>
              <p className="mb-4">
                These Terms of Service (“Terms”, “Terms of Service”) govern your use of our web
                pages located at http://kudoku.id and our mobile application Kudoku (together or
                individually “Service”) operated by PT. KUDOKU FINANSIAL INDONESIA.
              </p>
              <p className="mb-4">
                Your agreement with us includes these Terms (“Agreements”). You acknowledge that you
                have read and understood Agreements, and agree to be bound of them.
              </p>
              <p className="mb-4">
                If you do not agree with (or cannot comply with) Agreements, then you may not use
                the Service, but please let us know by emailing at business@kudoku.id so we can try
                to find a solution. These Terms apply to all visitors, users and others who wish to
                access or use Service.
              </p>
              <p className="mb-4">Thank you for being responsible.</p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Communications</h6>
              <p className="mb-4">
                By creating an Account on our Service, you agree to subscribe to newsletters,
                marketing or promotional materials and other information we may send. However, you
                may opt out of receiving any, or all, of these communications from us by following
                the unsubscribe link or by emailing at.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Purchases</h6>
              <p className="mb-4">
                If you wish to purchase any product or service made available through Service
                (“Purchase”), you may be asked to supply certain information relevant to your
                Purchase including, without limitation, your credit card number, the expiration date
                of your credit card, your billing address, and your shipping information.
              </p>
              <p className="mb-4">
                You represent and warrant that: (i) you have the legal right to use any credit
                card(s) or other payment method(s) in connection with any Purchase; and that (ii)
                the information you supply to us is true, correct and complete.
              </p>
              <p className="mb-4">
                We may employ the use of third party services for the purpose of facilitating
                payment and the completion of Purchases. By submitting your information, you grant
                us the right to provide the information to these third parties.
              </p>
              <p className="mb-4">
                We reserve the right to refuse or cancel your order at any time for reasons
                including but not limited to: product or service availability, errors in the
                description or price of the product or service, error in your order or other
                reasons.
              </p>
              <p className="mb-4">
                We reserve the right to refuse or cancel your order if fraud or an unauthorized or
                illegal transaction is suspected.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Contests, Sweepstakes and Promotions</h6>
              <p className="mb-4">
                Any contests, sweepstakes or other promotions (collectively, “Promotions”) made
                available through Service may be governed by rules that are separate from these
                Terms of Service. If you participate in any Promotions, please review the applicable
                rules. If the rules for a Promotion conflict with these Terms of Service, Promotion
                rules will apply.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Subscriptions</h6>
              <p className="mb-4">
                Some parts of Service are billed on a subscription basis (“Subscription(s)”). You
                will be billed in advance on a recurring and periodic basis (“Billing Cycle”).
                Billing cycles are set either on a monthly or annual basis, depending on the type of
                subscription plan you select when purchasing a Subscription.
              </p>
              <p className="mb-4">
                At the end of each Billing Cycle, your Subscription will automatically renew under
                the exact same conditions unless you cancel it or PT. KUDOKU FINANSIAL INDONESIA
                cancels it. You may cancel your Subscription renewal either through your online
                account management page or by contacting PT. KUDOKU FINANSIAL INDONESIA customer
                support team.
              </p>
              <p className="mb-4">
                A valid payment method, including credit card or PayPal, is required to process the
                payment for your subscription. You shall provide PT. KUDOKU FINANSIAL INDONESIA with
                accurate and complete billing information including full name, address, state, zip
                code, telephone number, and a valid payment method information. By submitting such
                payment information, you automatically authorize PT. KUDOKU FINANSIAL INDONESIA to
                charge all Subscription fees incurred through your account to any such payment
                instruments.
              </p>
              <p className="mb-4">
                Should automatic billing fail to occur for any reason, PT. KUDOKU FINANSIAL
                INDONESIA will issue an electronic invoice indicating that you must proceed
                manually, within a certain deadline date, with the full payment corresponding to the
                billing period as indicated on the invoice.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Free Trial</h6>
              <p className="mb-4">
                PT. KUDOKU FINANSIAL INDONESIA may, at its sole discretion, offer a Subscription
                with a free trial for a limited period of time (“Free Trial”).
              </p>
              <p className="mb-4">
                You may be required to enter your billing information in order to sign up for Free
                Trial.
              </p>
              <p className="mb-4">
                If you do enter your billing information when signing up for Free Trial, you will
                not be charged by PT. KUDOKU FINANSIAL INDONESIA until Free Trial has expired. On
                the last day of Free Trial period, unless you cancelled your Subscription, you will
                be automatically charged the applicable Subscription fees for the type of
                Subscription you have selected.
              </p>
              <p className="mb-4">
                At any time and without notice, PT. KUDOKU FINANSIAL INDONESIA reserves the right to
                (i) modify Terms of Service of Free Trial offer, or (ii) cancel such Free Trial
                offer.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Fee Changes</h6>
              <p className="mb-4">
                PT. KUDOKU FINANSIAL INDONESIA, in its sole discretion and at any time, may modify
                Subscription fees for the Subscriptions. Any Subscription fee change will become
                effective at the end of the then-current Billing Cycle.
              </p>
              <p className="mb-4">
                PT. KUDOKU FINANSIAL INDONESIA will provide you with a reasonable prior notice of
                any change in Subscription fees to give you an opportunity to terminate your
                Subscription before such change becomes effective.
              </p>
              <p className="mb-4">
                Your continued use of Service after Subscription fee change comes into effect
                constitutes your agreement to pay the modified Subscription fee amount.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Refunds</h6>
              <p className="mb-4">
                We issue refunds for Contracts within seven (7) days of the original purchase of the
                Contract.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Content</h6>
              <p className="mb-4">
                Our Service allows you to post, link, store, share and otherwise make available
                certain information, text, graphics, videos, or other material (“Content”). You are
                responsible for Content that you post on or through Service, including its legality,
                reliability, and appropriateness.
              </p>
              <p className="mb-4">
                By posting Content on or through Service, You represent and warrant that: (i)
                Content is yours (you own it) and/or you have the right to use it and the right to
                grant us the rights and license as provided in these Terms, and (ii) that the
                posting of your Content on or through Service does not violate the privacy rights,
                publicity rights, copyrights, contract rights or any other rights of any person or
                entity. We reserve the right to terminate the account of anyone found to be
                infringing on a copyright.
              </p>
              <p className="mb-4">
                You retain any and all of your rights to any Content you submit, post or display on
                or through Service and you are responsible for protecting those rights. We take no
                responsibility and assume no liability for Content you or any third party posts on
                or through Service. However, by posting Content using Service you grant us the right
                and license to use, modify, publicly perform, publicly display, reproduce, and
                distribute such Content on and through Service. You agree that this license includes
                the right for us to make your Content available to other users of Service, who may
                also use your Content subject to these Terms.
              </p>
              <p className="mb-4">
                PT. KUDOKU FINANSIAL INDONESIA has the right but not the obligation to monitor and
                edit all Content provided by users.
              </p>
              <p className="mb-4">
                In addition, Content found on or through this Service are the property of PT. KUDOKU
                FINANSIAL INDONESIA or used with permission. You may not distribute, modify,
                transmit, reuse, download, repost, copy, or use said Content, whether in whole or in
                part, for commercial purposes or for personal gain, without express advance written
                permission from us.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Prohibited Uses</h6>
              <p className="mb-4">
                You may use Service only for lawful purposes and in accordance with Terms. You agree
                not to use Service:
              </p>
              <ol>
                <li className="mb-4">
                  (a) In any way that violates any applicable national or international law or
                  regulation.
                </li>
                <li className="mb-4">
                  (b) For the purpose of exploiting, harming, or attempting to exploit or harm
                  minors in any way by exposing them to inappropriate content or otherwise.
                </li>
                <li className="mb-4">
                  (d) To impersonate or attempt to impersonate Company, a Company employee, another
                  user, or any other person or entity.
                </li>
                <li className="mb-4">
                  (e) In any way that infringes upon the rights of others, or in any way is illegal,
                  threatening, fraudulent, or harmful, or in connection with any unlawful, illegal,
                  fraudulent, or harmful purpose or activity.
                </li>
                <li className="mb-4">
                  (f) To engage in any other conduct that restricts or inhibits anyone&apos;s use or
                  enjoyment of Service, or which, as determined by us, may harm or offend Company or
                  users of Service or expose them to liability.
                </li>
              </ol>
              <p className="mb-4">Additionally, you agree not to:</p>
              <ol>
                <li className="mb-4">
                  (a) Use Service in any manner that could disable, overburden, damage, or impair
                  Service or interfere with any other party&apos;s use of Service, including their
                  ability to engage in real time activities through Service.
                </li>
                <li className="mb-4">
                  (b) Use any robot, spider, or other automatic device, process, or means to access
                  Service for any purpose, including monitoring or copying any of the material on
                  Service.
                </li>
                <li className="mb-4">
                  (c) Use any manual process to monitor or copy any of the material on Service or
                  for any other unauthorized purpose without our prior written consent.
                </li>
                <li className="mb-4">
                  (d) Use any device, software, or routine that interferes with the proper working
                  of Service.
                </li>
                <li className="mb-4">
                  (e) Introduce any viruses, trojan horses, worms, logic bombs, or other material
                  which is malicious or technologically harmful.
                </li>
                <li className="mb-4">
                  (f) Attempt to gain unauthorized access to, interfere with, damage, or disrupt any
                  parts of Service, the server on which Service is stored, or any server, computer,
                  or database connected to Service.
                </li>
                <li className="mb-4">
                  (g) Attack Service via a denial-of-service attack or a distributed
                  denial-of-service attack.
                </li>
                <li className="mb-4">
                  (h) Take any action that may damage or falsify Company rating.
                </li>
                <li className="mb-4">
                  (i) Otherwise attempt to interfere with the proper working of Service.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">No Use By Minors</h6>
              <p className="mb-4">
                Service is intended only for access and use by individuals at least eighteen (18)
                years old. By accessing or using any of Company, you warrant and represent that you
                are at least eighteen (18) years of age and with the full authority, right, and
                capacity to enter into this agreement and abide by all of the terms and conditions
                of Terms. If you are not at least eighteen (18) years old, you are prohibited from
                both the access and usage of Service.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Accounts</h6>
              <p className="mb-4">
                When you create an account with us, you guarantee that you are above the age of 18,
                and that the information you provide us is accurate, complete, and current at all
                times. Inaccurate, incomplete, or obsolete information may result in the immediate
                termination of your account on Service.
              </p>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account and
                password, including but not limited to the restriction of access to your computer
                and/or account. You agree to accept responsibility for any and all activities or
                actions that occur under your account and/or password, whether your password is with
                our Service or a third-party service. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your account.
              </p>
              <p className="mb-4">
                You may not use as a username the name of another person or entity or that is not
                lawfully available for use, a name or trademark that is subject to any rights of
                another person or entity other than you, without appropriate authorization. You may
                not use as a username any name that is offensive, vulgar or obscene.
              </p>
              <p className="mb-4">
                We reserve the right to refuse service, terminate accounts, remove or edit content,
                or cancel orders in our sole discretion.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Intellectual Property</h6>
              <p className="mb-4">
                Service and its original content (excluding Content provided by users), features and
                functionality are and will remain the exclusive property of PT. KUDOKU FINANSIAL
                INDONESIA and its licensors. Service is protected by copyright, trademark, and other
                laws of foreign countries. Our trademarks and trade dress may not be used in
                connection with any product or service without the prior written consent of PT.
                KUDOKU FINANSIAL INDONESIA.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Copyright Policy</h6>
              <p className="mb-4">
                We respect the intellectual property rights of others. It is our policy to respond
                to any claim that Content posted on Service infringes on the copyright or other
                intellectual property rights (“Infringement”) of any person or entity.
              </p>
              <p className="mb-4">
                If you are a copyright owner, or authorized on behalf of one, and you believe that
                the copyrighted work has been copied in a way that constitutes copyright
                infringement, please submit your claim via email to kotakhukum@gmail.com, with the
                subject line: “Copyright Infringement” and include in your claim a detailed
                description of the alleged Infringement as detailed below, under “DMCA Notice and
                Procedure for Copyright Infringement Claims”
              </p>
              <p className="mb-4">
                You may be held accountable for damages (including costs and attorneys&apos; fees)
                for misrepresentation or bad-faith claims on the infringement of any Content found
                on and/or through Service on your copyright.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">
                DMCA Notice and Procedure for Copyright Infringement Claims
              </h6>
              <p className="mb-4">
                You may submit a notification pursuant to the Digital Millennium Copyright Act
                (DMCA) by providing our Copyright Agent with the following information in writing
                (see 17 U.S.C 512(c)(3) for further detail):
              </p>
              <ol>
                <li className="mb-4">
                  (a) an electronic or physical signature of the person authorized to act on behalf
                  of the owner of the copyright&apos;s interest;
                </li>
                <li className="mb-4">
                  (b) a description of the copyrighted work that you claim has been infringed,
                  including the URL (i.e., web page address) of the location where the copyrighted
                  work exists or a copy of the copyrighted work;
                </li>
                <li className="mb-4">
                  (c) identification of the URL or other specific location on Service where the
                  material that you claim is infringing is located;
                </li>
                <li className="mb-4">(d) your address, telephone number, and email address;</li>
                <li className="mb-4">
                  (e) a statement by you that you have a good faith belief that the disputed use is
                  not authorized by the copyright owner, its agent, or the law;
                </li>
                <li className="mb-4">
                  (f) a statement by you, made under penalty of perjury, that the above information
                  in your notice is accurate and that you are the copyright owner or authorized to
                  act on the copyright owner&apos;s behalf.
                </li>
              </ol>
              <p className="mb-4">
                You can contact our Copyright Agent via email at{' '}
                <Link href="mailto: kotakhukum@gmail.com"> kotakhukum@gmail.com</Link>
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Error Reporting and Feedback</h6>
              <p className="mb-4">
                You may provide us either directly at business@kudoku.id or via third party sites
                and tools with information and feedback concerning errors, suggestions for
                improvements, ideas, problems, complaints, and other matters related to our Service
                (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire or
                assert any intellectual property right or other right, title or interest in or to
                the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii)
                Feedback does not contain confidential information or proprietary information from
                you or any third party; and (iv) Company is not under any obligation of
                confidentiality with respect to the Feedback. In the event the transfer of the
                ownership to the Feedback is not possible due to applicable mandatory laws, you
                grant Company and its affiliates an exclusive, transferable, irrevocable,
                free-of-charge, sub-licensable, unlimited and perpetual right to use (including
                copy, modify, create derivative works, publish, distribute and commercialize)
                Feedback in any manner and for any purpose.
              </p>
              <p className="mb-4">
                The third party sites and tools mentioned above include the following:
              </p>
              <p className="mb-4">
                You may be held accountable for damages (including costs and attorneys&apos; fees)
                for misrepresentation or bad-faith claims on the infringement of any Content found
                on and/or through Service on your copyright.
              </p>
              <p>Bugsnag</p>
              <p className="mb-12">
                Bugsnag is a platform for monitoring and logging stability of applications provided
                by Bugsnag Inc. Please read their Privacy Policy here:
                https://docs.bugsnag.com/legal/privacy-policy/{' '}
              </p>
              <p>ACRA</p>
              <p className="mb-12">
                ACRA or Application Crash Reports for Android is monitoring platform. Please find
                more information here: https://github.com/ACRA/acra
              </p>
              <p>Rollbar</p>
              <p className="mb-12">
                Rollbar is error tracking service provided by Rollbar Inc. Find out more here:
                https://docs.rollbar.com/docs/privacy-policy
              </p>
              <p>Sentry</p>
              <p className="mb-12">
                Sentry is open-source error tracking solution provided by Functional Software Inc.
                More information is available here: https://sentry.io/privacy/
              </p>
              <p>Raygun</p>
              <p className="mb-12">
                Raygun is automated error monitoring software provided by Raygun Limited. Privacy
                Policy is accessible at https://raygun.com/privacy/
              </p>
              <p>Firebase Crashlytics</p>
              <p>Firebase Crashlytics is bug reporting service provided by Google Inc.</p>
              <p>
                You may opt-out of certain Firebase features through your mobile device settings,
                such as your device advertising settings or by following the instructions provided
                by Google in their Privacy Policy: https://policies.google.com/privacy?hl=en
              </p>
              <p className="mb-12">
                For more information on what type of information Firebase collects, please visit the
                Google Privacy Terms web page: https://policies.google.com/privacy?hl=en
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Links To Other Web Sites</h6>
              <p className="mb-4">
                Our Service may contain links to third party web sites or services that are not
                owned or controlled by PT. KUDOKU FINANSIAL INDONESIA.
              </p>
              <p className="mb-4">
                PT. KUDOKU FINANSIAL INDONESIA has no control over, and assumes no responsibility
                for the content, privacy policies, or practices of any third party web sites or
                services. We do not warrant the offerings of any of these entities/individuals or
                their websites.
              </p>
              <p className="mb-4">
                YOU ACKNOWLEDGE AND AGREE THAT PT. KUDOKU FINANSIAL INDONESIA SHALL NOT BE
                RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR
                ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH
                CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR
                SERVICES.
              </p>
              <p className="mb-4">
                WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY
                THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Disclaimer Of Warranty</h6>
              <p className="mb-4">
                THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS.
                COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS
                TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS
                INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR
                CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
              </p>
              <p className="mb-4">
                NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR
                REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY,
                ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER
                COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES,
                THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE
                ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED,
                THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER
                HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH
                THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
              </p>
              <p className="mb-4">
                COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
                MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
              </p>
              <p className="mb-4">
                THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED
                UNDER APPLICABLE LAW.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Limitation Of Liability</h6>
              <p className="mb-4">
                EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS,
                EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR
                CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS&apos; FEES AND ALL
                RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL,
                IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN
                ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN
                CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL
                INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF
                ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY
                HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED
                BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO
                THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL
                THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION
                OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR
                LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Termination</h6>
              <p className="mb-4">
                We may terminate or suspend your account and bar access to Service immediately,
                without prior notice or liability, under our sole discretion, for any reason
                whatsoever and without limitation, including but not limited to a breach of Terms.
              </p>
              <p className="mb-4">
                If you wish to terminate your account, you may simply discontinue using Service.
              </p>
              <p className="mb-4">
                All provisions of Terms which by their nature should survive termination shall
                survive termination, including, without limitation, ownership provisions, warranty
                disclaimers, indemnity and limitations of liability.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Governing Law</h6>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of Indonesia
                without regard to its conflict of law provisions.
              </p>
              <p className="mb-4">
                Our failure to enforce any right or provision of these Terms will not be considered
                a waiver of those rights. If any provision of these Terms is held to be invalid or
                unenforceable by a court, the remaining provisions of these Terms will remain in
                effect. These Terms constitute the entire agreement between us regarding our Service
                and supersede and replace any prior agreements we might have had between us
                regarding Service.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Changes To Service</h6>
              <p className="mb-4">
                We reserve the right to withdraw or amend our Service, and any service or material
                we provide via Service, in our sole discretion without notice. We will not be liable
                if for any reason all or any part of Service is unavailable at any time or for any
                period. From time to time, we may restrict access to some parts of Service, or the
                entire Service, to users, including registered users.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Amendments To Terms</h6>
              <p className="mb-4">
                We may amend Terms at any time by posting the amended terms on this site. It is your
                responsibility to review these Terms periodically.
              </p>
              <p className="mb-4">
                Your continued use of the Platform following the posting of revised Terms means that
                you accept and agree to the changes. You are expected to check this page frequently
                so you are aware of any changes, as they are binding on you.
              </p>
              <p className="mb-4">
                By continuing to access or use our Service after any revisions become effective, you
                agree to be bound by the revised terms. If you do not agree to the new terms, you
                are no longer authorized to use Service.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Waiver And Severability</h6>
              <p className="mb-4">
                No waiver by Company of any term or condition set forth in Terms shall be deemed a
                further or continuing waiver of such term or condition or a waiver of any other term
                or condition, and any failure of Company to assert a right or provision under Terms
                shall not constitute a waiver of such right or provision.
              </p>
              <p className="mb-4">
                If any provision of Terms is held by a court or other tribunal of competent
                jurisdiction to be invalid, illegal or unenforceable for any reason, such provision
                shall be eliminated or limited to the minimum extent such that the remaining
                provisions of Terms will continue in full force and effect.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Acknowledgement</h6>
              <p className="mb-4">
                BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE
                READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
              </p>
            </section>

            <section className="mb-12">
              <h6 className="text-primary text-2xl mb-2">Contact Us</h6>
              <p>Please send your feedback, comments, requests for technical support:</p>
              <Link href="mailto:business@kudoku.id">business@kudoku.id</Link>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
