import React from 'react';

export default function Question4() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question 4</h2>
      <p className="mb-4">
      A customer who has been sold Vercel through a reseller has reached out to the team to ask about the product. Give a brief 2-5 sentence introduction to Vercel to showcase what Vercel does?
      </p>
      <div className="bg-gray-100 rounded-md p-4 flex flex-col space-y-4 text-teal-900">
        <p>Hi [customer name],</p>
        <p>Thanks for getting in touch.</p>
        <p>Vercel does and can do a lot! I'd love to schedule a demo tailored to your needs so you can quickly get started. Let me know your availability, and I’ll get that set up for you.</p>
        <p>I’m sure you’re keen to start, so Vercel is the all-in-one solution for creating high-speed web apps. You and the team can focus on writing code and let us handle the infrastructure, and to jumpstart your app development process, we even have pre-built solutions.</p>
        <p>There are tools for real-time collaboration, automatic previews, and production environments; it’s highly scalable and has rock-solid security, ensuring your applications are always available and protected. Plus, there’s seamless integrations with popular frameworks and tools; we know managing multiple logins, setup configurations, and payment systems can be a hassle, so the Vercel Marketplace https://vercel.com/marketplace will help you find and integrate services that work well with your Vercel projects.</p>
        
        <ul className="list-disc list-inside">
          <p>Other key benefits are:</p>
          <li>99.99% uptime—ensuring your apps are always available.</li>
          <li>Enhanced performance with global edge networks and optimised caching.</li>
          <li>Improved ROI with faster dev cycles, reduced infrastructure costs, and increased conversions and revenue.</li>
        </ul>
        <p>It might be too short notice for in-person, but you’re right on time for the Next.js conference on Oct 24th, and you can grab a free virtual ticket here: https://nextjs.org/conf</p>
        <p>I hope you can enjoy the conference and look forward to hearing from you.</p>
      </div>
    </div>
  );
}