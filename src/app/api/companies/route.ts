import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Handle GET requests
export async function GET() {
  try {
    const companies = await prisma.company.findMany({
      include: {
        directors: true,
        services: true,
      },
    });
    return NextResponse.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newCompany = await prisma.company.create({
      data: {
        name: body.name,
        description: body.description,
        directors: {
          create: body.directors,
        },
        services: {
          create: body.services,
        },
      },
    });

    return NextResponse.json(newCompany, { status: 201 });
  } catch (error) {
    console.error('Error creating company:', error);
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
}
