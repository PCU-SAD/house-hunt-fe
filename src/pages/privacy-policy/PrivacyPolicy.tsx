import { Container, Layout } from '@/components/common'
import { Typography } from '@/components/ui/typography'
import PrivacyHeader from '@/pages/privacy-policy/components/PrivacyHeader'
import { FC } from 'react'

type PrivacyPolicyProps = {}

const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {
  return (
    <Layout>
      <Container className="mx-auto mt-4 max-w-[700px]">
        <PrivacyHeader />

        <div className="mt-4 flex flex-col gap-4">
          <div>
            <Typography variant="h3">1. Introduction</Typography>
            <p className="flex flex-col gap-2">
              1.1 The House Hunter project (hereinafter referred to as "we,"
              "us," or "our") is committed to protecting the privacy and
              ensuring the security of personal data belonging to individuals
              (hereinafter referred to as "you" or "user") who interact with our
              platform. This Privacy Policy (hereinafter referred to as the
              "Policy") outlines the manner in which we collect, use, store, and
              protect your personal information in compliance with the General
              Data Protection Regulation (GDPR) (EU) 2016/679.
            </p>
          </div>

          <div>
            <Typography variant="h3">2. Data Collection</Typography>
            <div>
              <ul className="list-decimal space-y-1 pl-6">
                <li>Email address</li>
                <li>Phone number</li>
                <li>Name and surname</li>
                <li>
                  Identification documents, such as passport, driving license,
                  ID card, or residence permit
                </li>
                <li>
                  Property-related documents and information, including images,
                  address information, and property features
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Typography variant="h3">3. Purpose of Data Collection</Typography>
            <div>
              <p>
                The personal data collected by us is used for the following
                purposes:
              </p>
              <ul className="mt-2 list-decimal space-y-1 pl-6">
                <li>
                  Validating property ownership to ensure the legitimacy of
                  listings on our platform
                </li>
                <li>
                  Facilitating account verification to prevent fraudulent
                  activities
                </li>
                <li>Providing and improving our services to users</li>
              </ul>
            </div>
          </div>

          <div>
            <Typography variant="h3">4. Data Storage and Security</Typography>
            <div>
              <p>
                4.1 We employ robust security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or
                destruction. These measures include, but are not limited to,
                secure storage solutions, encryption, and strict access
                controls.
              </p>
              <p>
                4.2 Access to your personal data is restricted to authorized
                personnel who require such access to perform their duties and
                provide services to you.
              </p>
            </div>
          </div>

          <div>
            <Typography variant="h3">5. Data Retention</Typography>
            <div>
              <p>
                5.1 We retain user data for a period of 365 days from the date
                of collection or last interaction with our platform.
              </p>
              <p>
                5.2 Users will be notified via email 7 days prior to the
                expiration of the data retention period regarding our intention
                to extend the storage of their data for an additional year.
              </p>
              <p>
                5.3 If no response is received from the user within the
                specified timeframe, all data associated with the user will be
                securely and permanently deleted from our system.
              </p>
            </div>
          </div>

          <div>
            <Typography variant="h3">6. User Rights</Typography>
            <p>
              Under the GDPR, users have the following rights concerning their
              personal data:
            </p>
            <ul className="mt-2 list-decimal space-y-1 pl-6">
              <li>
                Right to Access: You have the right to request a copy of the
                personal data we hold about you.
              </li>
              <li>
                Right to Rectification: You have the right to request the
                correction of any inaccurate or incomplete personal data we hold
                about you.
              </li>
              <li>
                Right to Erasure ("Right to be Forgotten"): You have the right
                to request the deletion of your personal data. This can be done
                by visiting the "Profile Settings" page on our platform and
                clicking the "Delete My Account" button. Please note that upon
                deletion of your data, you will be required to undergo the
                verification process again should you wish to use our platform
                in the future.
              </li>
              <li>
                Right to Restrict Processing: You have the right to request the
                restriction of processing your personal data under certain
                conditions outlined in the GDPR. (e) Right to Data Portability:
                You have the right to receive your personal data in a
                structured, commonly used, and machine-readable format.
              </li>
              <li>
                Right to be Informed: You have the right to be informed about
                the collection and use of your personal data, including the
                purposes of processing, retention periods, and any third parties
                with whom the data may be shared.
              </li>
              <li>
                Right to Object: You have the right to object to the processing
                of your personal data under certain conditions specified in the
                GDPR.
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="h3">7. Data Sharing</Typography>
            <div>
              <p>
                7.1 We do not share your personal data with third parties,
                except when necessary to provide our services or as required by
                applicable laws and regulations.
              </p>
            </div>
          </div>

          <div>
            <Typography variant="h3">8. Contact Details</Typography>
            <div>
              <p>
                8.1 If you have any questions, concerns, or requests regarding
                our Privacy Policy or the handling of your personal data, please
                contact our Data Protection Officer by completing the contact
                form available on our website under the "Contact Us" tab.
              </p>
            </div>
          </div>

          <div>
            <Typography variant="h3">
              9. Changes to this Privacy Policy
            </Typography>
            <div>
              <p>
                9.1 We reserve the right to update or modify this Privacy Policy
                at any time. Any changes will be posted on this page and, where
                appropriate, notified to you via email.
              </p>
              <p>
                9.2 It is your responsibility to review this Privacy Policy
                periodically for any updates or changes.
              </p>
            </div>
          </div>

          <div>
            <Typography variant="h3">10. Combating Scams</Typography>

            <div>
              <p>
                We are committed to protecting our users from scams and
                fraudulent activities. To this end, we implement the following
                measures:
              </p>
              <ul className="mt-2 list-decimal space-y-1 pl-6">
                <li>
                  Verification of Listings: All property listings undergo a
                  thorough vetting process to ensure their authenticity,
                  including the verification of property ownership and the
                  legitimacy of the listings.
                </li>
                <li>
                  User Verification: We require users to provide valid
                  identification documents during the registration process to
                  prevent the creation of fraudulent accounts.
                </li>
                <li>
                  Monitoring and Reporting: We continuously monitor our platform
                  for suspicious activities and encourage users to report any
                  fraudulent or suspicious behavior. All reports are promptly
                  investigated, and appropriate actions are taken.
                </li>
                <li>
                  Education and Awareness: We provide resources and tips to our
                  users on how to recognize and avoid scams.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Typography variant="h3">11. Conclusion</Typography>
            <div>
              <p>
                11.1 By using the House Hunter platform, you acknowledge that
                you have read, understood, and agree to the terms outlined in
                this Privacy Policy.
              </p>
              <p>
                11.2 We are committed to ensuring the protection of your
                personal data, maintaining secure authentication and
                authorization processes, and upholding the integrity and
                confidentiality of our system.
              </p>
              <p>
                11.3 Regular security reviews and updates are conducted to adapt
                to emerging threats and vulnerabilities, ensuring the ongoing
                security of your personal data.
              </p>
            </div>
          </div>

          <div>
            <Typography variant="h3">12. Rights of House Hunter</Typography>
            <div>
              <p>
                12.1 We reserve the right to take appropriate legal action
                against users who engage in fraudulent activities, violate our
                terms of service, or infringe upon the rights of other users or
                House Hunter.
              </p>
              <p>
                12.2 We have the right to terminate or suspend user accounts
                that are found to be in violation of our terms of service or
                engaged in fraudulent activities, without prior notice.
              </p>
              <p>
                12.3 We reserve the right to cooperate with law enforcement
                authorities and provide user information when required by law or
                in response to a valid legal request, such as a court order,
                subpoena, or search warrant.
              </p>
              <p>
                12.4 In the event of a merger, acquisition, or sale of all or a
                portion of our assets, we reserve the right to transfer user
                information as part of the transaction, subject to the terms of
                this Privacy Policy and any applicable laws and regulations.
              </p>
              <p>
                12.5 We have the right to modify, suspend, or terminate our
                services, in whole or in part, at any time and without prior
                notice to users.
              </p>
            </div>
          </div>

          <div>
            <Typography variant="h3">13. Legal Issues</Typography>
            <div>
              <p>
                13.1 This Privacy Policy shall be governed by and construed in
                accordance with the laws of the Czech Republic, without regard
                to its conflict of law provisions.
              </p>
              <p>
                13.2 Any disputes arising from or relating to this Privacy
                Policy or the use of the House Hunter platform shall be resolved
                through amicable negotiations between the parties. If a
                resolution cannot be reached, the dispute shall be submitted to
                the exclusive jurisdiction of the courts of the Czech Republic,
                as we are employed in Prague.
              </p>
              <p>
                13.3 If any provision of this Privacy Policy is found to be
                invalid, illegal, or unenforceable by a court of competent
                jurisdiction, the remaining provisions shall continue in full
                force and effect.
              </p>
              <p>
                13.4 Our failure to enforce any right or provision of this
                Privacy Policy shall not be deemed a waiver of such right or
                provision.
              </p>
              <p>
                13.5 This Privacy Policy, together with our Terms of Service,
                constitutes the entire agreement between you and House Hunter
                regarding the use of our platform and supersedes any prior
                agreements or understandings, whether written or oral.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default PrivacyPolicy
