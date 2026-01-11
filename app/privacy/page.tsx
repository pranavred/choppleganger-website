"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-purple to-primary-blue py-20 px-6">
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
            Privacy Policy
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
                Introduction
              </h2>
              <p>
                Wave Tech LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
                Choppleganger mobile application (&quot;App&quot;). This Privacy Policy
                explains how we collect, use, and protect your information when
                you use our App.
              </p>
              <p className="mt-4">
                We are committed to protecting your privacy and ensuring you
                understand how your data is handled. Please read this policy
                carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                Photos and Images
              </h3>
              <p>
                When you use Choppleganger, you may upload photos for our AI to
                analyze and match with celebrity images. These images are:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Used solely for generating your celebrity match results
                </li>
                <li>
                  Stored securely only for the duration of your active
                  subscription
                </li>
                <li>
                  <strong className="text-primary-yellow">
                    Permanently deleted when your subscription ends
                  </strong>
                </li>
                <li>Never sold, shared, or used for any other purpose</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                Account Information
              </h3>
              <p>
                We collect minimal account information necessary to provide our
                service:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Apple ID identifier (for subscription management)
                </li>
                <li>Subscription status and billing information</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                Usage Data
              </h3>
              <p>
                We may collect anonymous usage data to improve our App,
                including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>App performance metrics</li>
                <li>Feature usage statistics (anonymized)</li>
                <li>Crash reports</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide and maintain the Choppleganger service</li>
                <li>Process your photos and generate celebrity matches</li>
                <li>Manage your subscription</li>
                <li>Improve and optimize the App experience</li>
                <li>Respond to your support requests</li>
                <li>Send important service notifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Retention
              </h2>
              <div className="p-6 glass rounded-xl border-l-4 border-primary-yellow">
                <p className="text-white font-semibold text-lg mb-2">
                  Our Data Retention Promise
                </p>
                <p>
                  We believe in minimal data retention. Your uploaded images and
                  profile data are stored only while you have an active
                  subscription.{" "}
                  <strong className="text-primary-yellow">
                    Once your subscription ends, all your data is permanently
                    deleted from our servers.
                  </strong>{" "}
                  We do not retain any user data after subscription termination.
                </p>
              </div>
              <ul className="list-disc pl-6 mt-6 space-y-2">
                <li>
                  <strong className="text-white">Active Subscription:</strong>{" "}
                  Your photos and profile data are retained to provide the
                  service
                </li>
                <li>
                  <strong className="text-white">
                    After Subscription Ends:
                  </strong>{" "}
                  All data is permanently deleted within 30 days
                </li>
                <li>
                  <strong className="text-white">Account Deletion:</strong> You
                  can request immediate deletion of all your data at any time
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                data:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Encrypted data transmission (TLS/SSL)</li>
                <li>Secure cloud storage with encryption at rest</li>
                <li>Regular security audits and updates</li>
                <li>Limited employee access to user data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Third-Party Services
              </h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong className="text-white">Apple App Store:</strong> For
                  app distribution and payment processing
                </li>
                <li>
                  <strong className="text-white">Cloud Infrastructure:</strong>{" "}
                  For secure data storage and processing
                </li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies, and we encourage
                you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong className="text-white">Access:</strong> Request a copy
                  of your personal data
                </li>
                <li>
                  <strong className="text-white">Deletion:</strong> Request
                  deletion of all your data at any time
                </li>
                <li>
                  <strong className="text-white">Portability:</strong> Receive
                  your data in a portable format
                </li>
                <li>
                  <strong className="text-white">Withdraw Consent:</strong> Stop
                  using the App at any time
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:pranav@wavetechhq.com"
                  className="text-primary-yellow hover:underline"
                >
                  pranav@wavetechhq.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Children&apos;s Privacy
              </h2>
              <p>
                Choppleganger is not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If you believe we have collected information
                from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                International Users
              </h2>
              <p>
                If you are accessing the App from outside the United States,
                please be aware that your information may be transferred to,
                stored, and processed in the United States where our servers are
                located.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. We encourage
                you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
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

            <section className="mt-12 p-6 glass rounded-xl text-center">
              <p className="text-white font-semibold text-lg">
                Your Privacy Matters
              </p>
              <p className="mt-2 text-muted">
                We&apos;re committed to being transparent about our data practices.
                If you have any concerns, don&apos;t hesitate to reach out.
              </p>
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
              href="/terms"
              className="text-muted hover:text-white text-sm transition-colors"
            >
              Terms of Service
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
