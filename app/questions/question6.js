import React from 'react';

export default function Question6() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question 6</h2>
      <p className="mb-4">
        A customer, new to Next.js and Vercel, asks about a high usage bill regarding fast origin transfer and fast data transfer. What would be the best way to help mitigate this?
      </p>
      <div className="bg-gray-100 rounded-md p-4 flex flex-col space-y-4 text-teal-900">
        <p>Hi [customer name],</p>
        <p>Thank you for reaching out about your recent bill. I understand that unexpected costs can be concerning, especially when you're new to Next.js and Vercel. Let's work together to understand what's happening and find ways to optimise your usage.</p>
        <p>First, I'd like to ask a few questions to get a better picture of your situation.</p>
        <ul className="list-decimal list-inside">
          <li>Have you had a chance to review your usage details in the Vercel dashboard? If so, what specific areas are showing high usage?
          (https://vercel.com/docs/dashboard-features)</li>
          <li>Can you tell me a bit about your application? For example, is it content-heavy with lots of images or videos?</li>
          <li>Are you using any particular features like Incremental Static Regeneration (ISR) or Middleware?</li>
          <li>Have you noticed any sudden spikes in traffic or usage?</li>
        </ul>
        <p>Regarding Fast Data Transfer (FDT) and Fast Origin Transfer (FOT), there are several strategies we can explore to help mitigate costs:</p>
        <ul className="list-decimal list-inside">
          <p>For Fast Data Transfer:</p>
          <li>Image Optimisation: Are you using Vercel's Image Optimisation feature? This can significantly reduce the size of image files being transferred. (https://vercel.com/docs/pricing/image-optimization)</li>
          <li>Bundle Analysis: We could look into analyzing and optimising your JavaScript bundles to reduce their size. (https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling)</li>
        </ul>
        <ul className="list-decimal list-inside">
          <p>For Fast Origin Transfer:</p>
          <li>Response Optimisation and Caching Strategies: If you're using Vercel Functions, we can explore ways to reduce the size of function responses and implementing effective caching can reduce the need for repeated function calls.(https://vercel.com/docs/pricing/serverless-functions#optimizing-function-invocations)</li>
          <li>Middleware Optimisation: If you're using Middleware, we can ensure it's only running when necessary. (https://vercel.com/docs/pricing/edge-middleware#optimizing-middleware-invocations)</li>
        </ul>
        <p>We’ll start by looking at your usage breakdown, and then we can develop a tailored plan to reduce costs while maintaining your application's performance. I'm here to help you investigate your specific usage patterns and implement the most effective optimisations for your application.</p>
        <p>Please let me know if you have any questions about the information I've provided, or there are any more details you can share about your specific situation so I can help further. </p>
      </div>
    </div>
  );
}