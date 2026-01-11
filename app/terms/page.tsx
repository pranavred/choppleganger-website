"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-blue to-primary-purple py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.h1
            className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Terms of Service
          </motion.h1>
          <p className="text-white/70 mt-4">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <motion.div
          className="prose prose-invert prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using the Choppleganger mobile
                application (&quot;App&quot;), you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). The App is owned and operated by Wave Tech
                LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). If you do not agree
                to these Terms, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Description of Service
              </h2>
              <p>
                Choppleganger is an entertainment application that uses
                artificial intelligence to match user-submitted photos with
                celebrity images. The App is intended for entertainment purposes
                only and should not be taken as a serious assessment of
                physical appearance or similarity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Eligibility
              </h2>
              <p>
                You must be at least 13 years old to use the App. If you are
                under 18, you must have parental or guardian consent to use the
                App. By using the App, you represent and warrant that you meet
                these eligibility requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. User Content
              </h2>
              <p>
                By uploading photos to the App, you grant us a limited,
                non-exclusive license to process your images solely for the
                purpose of providing the matching service. You represent and
                warrant that:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  You own the rights to any photos you upload or have obtained
                  necessary permissions
                </li>
                <li>
                  Your photos do not violate any third-party rights, including
                  privacy and intellectual property rights
                </li>
                <li>
                  You will not upload inappropriate, offensive, or illegal
                  content
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Subscription and Payments
              </h2>
              <p>
                Choppleganger offers a premium subscription service. By
                subscribing, you agree to the following:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong className="text-white">Free Trial:</strong> New users
                  may be eligible for a 3-day free trial. You will not be
                  charged during the trial period.
                </li>
                <li>
                  <strong className="text-white">Subscription Fee:</strong>{" "}
                  After the trial period, your subscription will automatically
                  renew at $6.99 per week unless cancelled.
                </li>
                <li>
                  <strong className="text-white">Cancellation:</strong> You may
                  cancel your subscription at any time through your Apple App
                  Store account settings. Cancellation will take effect at the
                  end of the current billing period.
                </li>
                <li>
                  <strong className="text-white">Refunds:</strong> All payments
                  are processed through Apple. Refund requests must be
                  submitted through Apple&apos;s refund process.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Data Handling
              </h2>
              <p>
                We take your privacy seriously. Images you upload are used
                solely for generating your celebrity matches. All user data,
                including uploaded images, will be permanently deleted when your
                subscription ends. We do not retain any personal data after
                subscription termination. For more details, please review our{" "}
                <Link href="/privacy" className="text-primary-yellow hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Prohibited Uses
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use the App for any unlawful purpose</li>
                <li>
                  Upload photos of individuals without their consent
                </li>
                <li>
                  Attempt to reverse engineer, decompile, or disassemble the App
                </li>
                <li>
                  Use the App to harass, bully, or defame any person
                </li>
                <li>
                  Circumvent any security features of the App
                </li>
                <li>
                  Use automated systems or bots to access the App
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Intellectual Property
              </h2>
              <p>
                The App, including its design, features, and content (excluding
                user-uploaded content), is owned by Wave Tech LLC and is
                protected by intellectual property laws. Celebrity images used
                in the App are used for entertainment and parody purposes under
                fair use principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Disclaimer of Warranties
              </h2>
              <p>
                THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
                WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR
                COMPLETELY SECURE. THE MATCHING RESULTS ARE FOR ENTERTAINMENT
                PURPOSES ONLY AND SHOULD NOT BE RELIED UPON FOR ANY OTHER
                PURPOSE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WAVE TECH LLC SHALL NOT
                BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE
                APP. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID
                FOR THE APP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Wave Tech LLC, its
                officers, directors, employees, and agents from any claims,
                damages, losses, or expenses arising from your use of the App or
                violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                12. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify users of significant changes through the App or via
                email. Your continued use of the App after changes constitutes
                acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                13. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the United States, without regard to conflict
                of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                14. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="mt-4 p-6 glass rounded-xl">
                <p className="text-white font-semibold">Wave Tech LLC</p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:pranav@wavetechhq.com"
                    className="text-primary-yellow hover:underline"
                  >
                    pranav@wavetechhq.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Wave Tech LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-muted hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-muted hover:text-white text-sm transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
