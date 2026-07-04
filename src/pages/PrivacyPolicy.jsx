// src/pages/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-slate-900 text-slate-100 min-height-screen py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700">
                <h1 className="text-3xl font-bold mb-2 text-white">Privacy Policy</h1>
                <p className="text-sm text-slate-400 mb-8">Last Updated: July 4, 2026</p>

                <section className="space-y-6 text-slate-300 leading-relaxed">
                    <p>
                        At <strong>Technical Stars</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our home maintenance services.
                    </p>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Personal Data:</strong> Name, phone number, email address, and service location details provided voluntarily when booking a service or contacting us.</li>
                            <li><strong>Derivative Data:</strong> IP addresses, browser types, and access times collected automatically via system logs.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-2">2. Use of Information</h2>
                        <p>We use your information to schedule and fulfill maintenance bookings, manage your requests, communicate service updates, and optimize your overall website experience.</p>
                    </div>

                    <div className="bg-slate-900 p-5 rounded-lg border border-yellow-600/30">
                        <h2 className="text-xl font-semibold text-yellow-500 mb-2">3. Third-Party Data Sharing & Advertising</h2>
                        <p className="text-sm">
                            We share customer data with third-party marketing and advertising platforms, including Google, to perform services on our behalf. This includes the use of <strong>Google Customer Match</strong> and conversion tracking tags.
                        </p>
                        <p className="text-sm mt-2">
                            To protect user privacy, data collected via our conversion tags (such as phone numbers or email addresses) is securely hashed before it is sent to Google. Google acts as a data processor under the Google Ads Data Processing Terms and only uses this data to match it against existing Google accounts for audience optimization, attribution tracking, and targeted marketing campaigns. We obtain explicit user consent for this data collection and sharing where required by applicable local data protection laws.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-white mb-2">4. Contact Us</h2>
                        <p>If you have questions regarding this policy, please reach out via our contact channels:</p>
                        <ul className="mt-2 text-sm text-slate-400">
                            <li><strong>Business Name:</strong> Technical Stars</li>
                            <li><strong>Service Region:</strong> Riyadh, Saudi Arabia</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;