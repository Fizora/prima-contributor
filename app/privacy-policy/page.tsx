import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Qur'an Prima",
  description: "Privacy Policy for Qur'an Prima application.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-green-500 dark:text-green-400">
        Privacy Policy
      </h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">1. Introduction</h2>
          <p>
            Welcome to Qur'an Prima. We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, 
            please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you register on the App, 
            express an interest in obtaining information about us or our products and Services, when you participate in 
            activities on the App or otherwise when you contact us.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Personal Information Provided by You:</strong> We collect names, email addresses, and other similar information.</li>
            <li><strong>Automatically Collected Information:</strong> We collect certain information when you visit, use, or navigate the App. This information does not reveal your specific identity but may include device and usage information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our App for a variety of business purposes described below. 
            We process your personal information for these purposes in reliance on our legitimate business interests, 
            in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, 
            or to fulfill business obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5. How Long Do We Keep Your Information?</h2>
          <p>
            We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless 
            otherwise required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">6. How Do We Keep Your Information Safe?</h2>
          <p>
            We aim to protect your personal information through a system of organizational and technical security measures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">7. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us or contact the contributors listed on the home page.
          </p>
        </section>

        <p className="text-sm italic mt-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
