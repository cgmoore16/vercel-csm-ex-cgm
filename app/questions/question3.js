import React from 'react';

export default function Question3() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question 3</h2>
      <p className="mb-4">
        A customer has a project on Vercel and they want to know about best practices when it comes to redirects. Write a reply to the customer.
      </p>
      <div className="bg-gray-100 rounded-md p-4 flex flex-col space-y-4 text-teal-900">
        <p>Hi [customer name],</p>
        <p>Are you looking at redirecting users to a different domain or a different page but on the same domain? There's Dynamic (domain) and Static (page) redirects. You can read through some use cases and the different options here https://vercel.com/docs/edge-network/redirects if you haven't decided yet.</p>
        <p>If you know what you're going to use already, here's our best practices for when you implement them</p>
      <ul className="pl-2 list-disc list-inside">
        <li>Test thoroughly: Test your redirects thoroughly to ensure they work as expected. Use a preview deployment to test redirects before deploying them to production</li>
        <li>Use relative paths: Use relative paths in your destination field to avoid hardcoding your domain name</li>
        <li>Use permanent redirects: Use permanent redirects for permanent URL changes and temporary redirects for temporary changes</li>
        <li>Use wildcards carefully: Wildcards can be powerful but should be used with caution. For example, if you use a wildcard in a source rule that matches any URL path, you could inadvertently redirect all incoming requests to a single destination, effectively breaking your site.</li>
        <li>Prioritize HTTPS: Use redirects to enforce HTTPS for all requests to your domain</li>
      </ul>
        <p>Let me know if you have any further questions or need anything else.</p>
      </div>
    </div>
  );
}