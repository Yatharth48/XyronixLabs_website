"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const fetchJobs = async () => {
  try {
    // Simulate API call or database fetch
    return [
      { id: 1, title: 'Software Engineer', description: 'Develop scalable applications.', location: 'Remote' },
      { id: 2, title: 'UI/UX Designer', description: 'Design beautiful interfaces.', location: 'New York' }
    ];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};

export default function jobs() {
  const [jobs, setJobs] = useState<{ id: number; title: string; description: string; location: string; }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs()
      .then((data) => setJobs(data))
      .catch((err) => setError('Failed to load jobs'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading jobs...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center">Open Positions</h1>
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No jobs available at the moment.</p>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <div key={job.id} className="p-6 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.description}</p>
              <p className="text-gray-500">Location: {job.location}</p>
              <Link href={`/jobs/${job.id}`} className="mt-4 inline-block text-blue-600 hover:underline">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
