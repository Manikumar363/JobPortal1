'use client';

import { Center, Paper } from '@mantine/core';
import CreateJobForm from '../../../Components/CreateJobForm';

export default function CreateJobPage() {
  return (
    <Center style={{ minHeight: '100vh'}}>
      <Paper 
      radius={24}
      p={36}
      shadow="xl"
      style={{
        maxWidth: 540,
        width: '100%',
        background: '#fff',
        borderRadius: 24,
      }}
      >
        <CreateJobForm />
      </Paper>
    </Center>
  );
}