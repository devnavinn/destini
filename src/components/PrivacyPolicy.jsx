import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Privacy Policy - Destini App</title>
                <meta name="description" content="Read Destini's Privacy Policy explaining how we collect, use, and protect your personal data for our app and website." />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Privacy Policy - Destini App" />
                <meta property="og:description" content="Learn how Destini values and safeguards your privacy on our mobile app and website." />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="max-w-5xl mx-auto p-5 text-gray-500">
                <h2 className="mb-4">Privacy Policy</h2>
                <p className="mb-6">Last updated: November 16, 2025</p>

                <p className="mb-6">
                    Destini ("we", "our", or "us") values your privacy and is committed to
                    protecting your personal information. This Privacy Policy explains how
                    we collect, use, and safeguard your data when you use our mobile
                    application and website.
                </p>

                <h3 className="mb-3">1. Information We Collect</h3>
                <ul className="mb-6 list-disc list-inside space-y-1">
                    <li>
                        <strong>Personal Information:</strong> Name, email address, phone
                        number, profile photo, and preferences you provide.
                    </li>
                    <li>
                        <strong>Location Data:</strong> Approximate or precise location to
                        show nearby users and events (only if you grant permission).
                    </li>
                    <li>
                        <strong>Usage Data:</strong> Log data, device type, and interaction
                        patterns for app improvement.
                    </li>
                </ul>

                <h3 className="mb-3">2. How We Use Your Information</h3>
                <ul className="mb-6 list-disc list-inside space-y-1">
                    <li>To create and manage your account.</li>
                    <li>To connect you with people and events nearby that match your interests.</li>
                    <li>To improve the app experience and provide personalized recommendations.</li>
                    <li>To send service updates, notifications, and promotional content (you can opt out anytime).</li>
                </ul>

                <h3 className="mb-3">3. Data Sharing and Security</h3>
                <p className="mb-6">
                    We do not sell or rent your personal information. Limited data may be
                    shared with trusted third-party services that help us operate the app,
                    under strict confidentiality agreements. We use encryption and secure
                    servers to protect your information.
                </p>

                <h3 className="mb-3">4. Your Choices</h3>
                <ul className="mb-6 list-disc list-inside space-y-1">
                    <li>You can update, correct, or delete your information anytime.</li>
                    <li>You may withdraw location or notification permissions from your device settings.</li>
                    <li>You can delete your account, and all personal data will be removed within 30 days.</li>
                </ul>

                <h3 className="mb-3">5. Children’s Privacy</h3>
                <p className="mb-6">
                    Destini is intended for users aged 16 and above. We do not knowingly
                    collect information from minors.
                </p>

                <h3 className="mb-3">6. Updates to This Policy</h3>
                <p className="mb-6">
                    We may update this Privacy Policy periodically. Continued use after
                    changes means you agree to the revised policy.
                </p>

                <h3 className="mb-3">7. Contact Us</h3>
                <p>
                    If you have questions or requests, contact us at <a href="mailto:support@destiniapp.com" className="text-blue-600 underline">support@destiniapp.com</a>.
                </p>
            </div>
        </>
    );
};

export default PrivacyPolicy;
