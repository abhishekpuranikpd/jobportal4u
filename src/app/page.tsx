import prisma from '@/lib/db/prisma';
import Image from 'next/image';
import { Job } from '@prisma/client';
import Navbar from '@/components/navbar';

async function getjobs() {
  const data = await prisma.job.findMany({
   where : {}
  });
  return data;
}

export default async function Home() {
  
  const jobs = await getjobs();
  return ( <>
    <Navbar/>
    <div className="my-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-5 md:gap-3 bg-primary ">
    {jobs.map((job) => (
    <div key={job.id} className="card w-auto bg-white text-primary-content">
      <div  className="card-body">
         <h2 className="card-title">{job.title}</h2>
            <p>{job.description}</p>
            <div className="card-actions justify-end">
              <button className="btn">Apply Now</button>
            </div>
         </div>
         </div>
        ))}
    </div> 
    </>
   
  )
}
