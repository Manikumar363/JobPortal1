'use client';

import { useEffect, useState } from 'react';
import { Container, Grid, Modal, Button } from '@mantine/core';
import JobFilters from '../../Components/JobFilters';
import JobCard from '../../Components/JobCard';
import CreateJobForm from '../../Components/CreateJobForm';

const jobs = [
  {
    id: 1,
    companyLogo: '/amazon-logo.png',
    jobTitle: 'Full Stack Developer',
    companyName: 'Amazon',
    experience: '1-3',
    location: 'Onsite',
    jobType: 'Full-time',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 2,
    companyLogo: '/tesla-logo.png',
    jobTitle: 'Node Js Developer',
    experience: '1-3',
    location: 'Onsite',
    jobType: 'Full-time',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 3,
    companyLogo: '/swiggy-logo.png',
    jobTitle: 'UX/UI Designer',
    companyName: 'Swiggy',
    experience: '1-3',
    location: 'Onsite',
    jobType: 'Full-time',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  // ...add more jobs as needed for the grid
  {
    id: 4,
    companyLogo: '/amazon-logo.png',
    jobTitle: 'Full Stack Developer',
    companyName: 'Amazon',
    experience: '1-3',
    location: 'Onsite',
    jobType: 'Full-time',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 5,
    companyLogo: '/tesla-logo.png',
    jobTitle: 'Node Js Developer',
    companyName: 'Tesla',
    experience: '1-3',
    location: 'Onsite',
    jobType: 'Full-time',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 6,
    companyLogo: '/swiggy-logo.png',
    jobTitle: 'UX/UI Designer',
    companyName: 'Swiggy',
    experience: '1-3',
    location: 'Onsite',
    jobType: 'Full-time',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 7,
    companyLogo: '/amazon-logo.png',
    jobTitle: 'UX/UI Designer',
    companyName: 'Swiggy',
    experience: '1-3',
    location: 'Onsite',
    jobType: 'Full-time',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
  {
    id: 8,
    companyLogo: '/tesla-logo.png',
    jobTitle: 'UX/UI Designer',
    companyName: 'Swiggy',
    experience: '1-3',
    location: 'Onsite',
    jobType: 'Full-time',
    salary: '12LPA',
    description: [
      'A user-friendly interface lets you browse stunning photos and videos',
      'Filter destinations based on interests and travel style, and create personalized',
    ],
  },
];

export default function JobsPage() {
  const [opened, setOpened] = useState(false);

  return (
    <Container size="lg" py="xl">


      {/* Modal for Create Job Form */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        size="lg"
        radius={24}
        overlayProps={{
          backgroundOpacity: 0.15,
          blur: 0,
        }}
        withCloseButton={false}
        styles={{
          content: { padding: 0, borderRadius: 24 },
        }}
      >
        <CreateJobForm />
      </Modal>

      {/* Job Filters and Grid */}
      <JobFilters />
      <Grid mt="md" gutter="xl">
        {Array.isArray(jobs) && jobs.length > 0 ? (
          jobs.map((job) => (
          <Grid.Col key={job.id} span={3}>
            <JobCard job={job} />
          </Grid.Col>
        ))
       ) : (
          <Grid.Col span={12}>
            <div>No jobs found</div>
          </Grid.Col>
        )}
      </Grid>
    </Container>
  );
}