import { useEffect } from 'react';

export default function AuthSuccess() {
  // You can add any authentication success handling here
  // For example, you could check auth state or redirect after a delay

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Authentication Successful!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          You've been successfully authenticated. Redirecting to your dashboard...
        </p>
        {/* You can add a loading spinner or animation here */}
        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}