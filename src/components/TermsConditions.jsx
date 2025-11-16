import React from "react";

const TermsConditions = () => {
    return (
        <div className="max-w-5xl mx-auto p-5 text-gray-500">
            <h2 className="mb-4">Terms and Conditions</h2>
            <p className="mb-6">Last updated: November 16, 2025</p>

            <p className="mb-6">
                Welcome to Destini! By using our app and services, you agree to these
                Terms and Conditions. Please read them carefully before creating an
                account or participating in any activities.
            </p>

            <h3 className="mb-3">1. Use of the App</h3>
            <ul className="mb-6 list-disc list-inside space-y-1">
                <li>Destini connects users for social, creative, or leisure activities nearby.</li>
                <li>You must be at least 16 years old to use the app.</li>
                <li>All information you provide must be accurate and up to date.</li>
            </ul>

            <h3 className="mb-3">2. User Conduct</h3>
            <ul className="mb-6 list-disc list-inside space-y-1">
                <li>Be respectful. Harassment, hate speech, or misleading activities are prohibited.</li>
                <li>Do not use the app for illegal or commercial solicitation purposes.</li>
                <li>Destini may suspend or delete accounts that violate community guidelines.</li>
            </ul>

            <h3 className="mb-3">3. Event and Activity Disclaimer</h3>
            <p className="mb-6">
                Destini only facilitates connections. We are not responsible for any
                issues, injuries, or disputes arising during meetups or activities.
                Users are encouraged to meet in safe, public spaces.
            </p>

            <h3 className="mb-3">4. Intellectual Property</h3>
            <p className="mb-6">
                All logos, trademarks, and app content belong to Destini or its
                licensors. You may not copy, distribute, or modify them without written
                consent.
            </p>

            <h3 className="mb-3">5. Limitation of Liability</h3>
            <p className="mb-6">
                Destini is provided “as is.” We are not liable for temporary outages,
                data loss, or third-party misuse. Use the app at your own discretion.
            </p>

            <h3 className="mb-3">6. Termination</h3>
            <p className="mb-6">
                You may delete your account at any time. We may suspend accounts that
                violate policies or misuse the service.
            </p>

            <h3 className="mb-3">7. Governing Law</h3>
            <p className="mb-6">
                These Terms are governed by the laws of India. Any disputes will be
                resolved under the jurisdiction of Indian courts.
            </p>

            <h3 className="mb-3">8. Contact Us</h3>
            <p>
                For questions about these Terms, email us at <a href="mailto:support@destiniapp.com" className="text-blue-600 underline">support@destiniapp.com</a>.
            </p>
        </div>
    );
};

export default TermsConditions;