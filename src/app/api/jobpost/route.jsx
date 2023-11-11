import prisma from "@/lib/db/prisma";
import { Job } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
      const data = await prisma.job.findMany();
      console.log(data);
      return NextResponse.json({ data, success: true });
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return NextResponse.json({ success: false, error: "Error fetching jobs" }, { status: 500 });
    }
}  


export async function POST(request) {
        try {
          const {
            title,
            description,
            location,
            salary,
            company,
            vacancyNumber,
            skills,
            qualifications,
            mode,
          } = await request.json();
      
          // Validate input data
          if (!title || !description || !location || !salary || !company || !vacancyNumber || !skills || !qualifications || !mode) {
            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
          }
      
          
          const job = await prisma.job.create({
            data: {
              title,
              description,
              location,
              salary,
              company,
              vacancyNumber,
              skills,
              qualifications,
              mode,
            },
          });
      
          return NextResponse.json({ result: "New job posted", success: true, job }, { status: 200 });
        } catch (error) {
          console.error("Error creating job:", error);
          return NextResponse.json({ success: false, error: "Error creating job" }, { status: 500 });
        }
      }