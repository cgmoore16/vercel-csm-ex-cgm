'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const PaginationTriangle = ({ number, isActive }) => (
  <svg
    width="76"
    height="65"
    viewBox="0 0 76 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full`}
  >
    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
    <text x="33" y="44" fill="#164e63" fontSize="20" fontWeight="700">
      {number}
    </text>
  </svg>
);

const tealGradient = [
  'bg-teal-200 border-teal-300',
  'bg-teal-300 border-teal-400',
  'bg-teal-400 border-teal-500',
  'bg-teal-500 border-teal-600',
  'bg-teal-600 border-teal-700',
  'bg-teal-700 border-teal-800',
  'bg-teal-800 border-teal-900',
  'bg-teal-900 border-teal-950',
];

export default function PaginationLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const currentPage = isHomePage ? 0 : parseInt(pathname.split('/').pop() || '1');
  
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-start p-6 sm:p-10 font-[family-name:var(--font-geist-sans)]">
          <main className="flex justify-center w-full mb-16">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="180"
              height="42"
              fill="#ffffff" 
              viewBox="0 0 284 65"
            >
              <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
            </svg>
          </main>
  
          {!isHomePage && (
            <h1 className="text-2xl font-bold text-center mb-6">
              CSM, Digital Success 2024 (Global) Take-Home Exercise
            </h1>
          )}
          
          {/* Content area */}
          <div className="flex-grow w-full">
            {children}
          </div>
        </div>
        
        {!isHomePage && (
          <footer className="mt-auto">
            <nav className="py-8 bg-none">
              <ol className="flex justify-center items-center gap-1 text-s font-medium">
                <li>
                  <Link
                    href={currentPage === 1 ? '/' : `/questions/${currentPage - 1}`}
                    className={`inline-flex items-center justify-center rounded border text-white hover:bg-teal-600 transition-colors ${tealGradient[0]} transform hover:scale-110 duration-200 ease-in-out`}
                    style={{ width: '4rem', height: '4rem' }}
                  >
                    <span className="sr-only">Previous Page</span>
                    <PaginationTriangle number="<" />
                  </Link>
                </li>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                  <li key={number}>
                    <Link
                      href={`/questions/${number}`}
                      className={`inline-flex items-center justify-center rounded border text-white hover:bg-teal-600 transition-colors ${
                        tealGradient[number - 1]
                      } transform hover:scale-110 duration-200 ease-in-out ${
                        currentPage === number ? 'ring-2 ring-offset-2 ring-teal-500' : ''
                      }`}
                      style={{
                        width: currentPage === number ? '5rem' : '4rem',
                        height: currentPage === number ? '5rem' : '4rem',
                      }}
                    >
                      <span className="sr-only">Page {number}</span>
                      <PaginationTriangle number={number} />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`/questions/${Math.min(8, currentPage + 1)}`}
                    className={`inline-flex items-center justify-center rounded border text-white hover:bg-teal-600 transition-colors ${tealGradient[7]} transform hover:scale-110 duration-200 ease-in-out`}
                    style={{ width: '4rem', height: '4rem' }}
                  >
                    <span className="sr-only">Next Page</span>
                    <PaginationTriangle number=">" />
                  </Link>
                </li>
              </ol>
            </nav>
          </footer>
        )}
      </div>
    );
  }