'use client';
import { Card, Group, Text, Badge, Button, Image, Box, List, ThemeIcon } from '@mantine/core';
import { IconUser, IconMapPin, IconBriefcase, IconStack2 } from '@tabler/icons-react';

interface JobCardProps {
  job: {
    id: number;
    companyLogo: string;
    jobTitle: string;
    experience: string;
    location: string;
    salary: string;
    description: string[];
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card
      shadow="sm"
      radius="md"
      p="lg"
      style={{
        minHeight: 320,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo and Badge Row */}
      <Group justify="space-between" align="center" mb={8}>
        <Box
          style={{
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Image
            src={job.companyLogo}
            alt="logo"
            width={32}
            height={32}
            fit="contain"
            style={{ display: 'block' }}
          />
        </Box>
        <Badge
          color="blue"
          variant="light"
          style={{
            textTransform: 'uppercase',
            fontWeight: 600,
            fontSize: 12,
            padding: '4px 12px',
            letterSpacing: 1,
            marginTop: 4,
          }}
        >
          24h Ago
        </Badge>
      </Group>
      <Box>
        <Text fw={700} size="lg" mb={2}>
          {job.jobTitle}
        </Text>
        <Text size="xs" c="dimmed" mb={10}>
        </Text>
        <Group gap={8} mb={8}>
          <Group gap={4} align="center">
            <IconUser size={16} />
            <Text size="xs">{job.experience} yr Exp</Text>
          </Group>
          <Group gap={4} align="center">
            <IconMapPin size={16} />
            <Text size="xs">{job.location}</Text>
          </Group>         
          <Group gap={4} align="center">
            <IconStack2 size={16} />
            <Text size="xs">{job.salary}</Text>
          </Group>
        </Group>
        <List size="xs" spacing="xs" mb="md" mt={4} icon={<ThemeIcon color="gray" size={8} radius="xl" />}>
          {job.description.map((desc, idx) => (
            <List.Item key={idx}>{desc}</List.Item>
          ))}
        </List>
      </Box>
      <Button
        fullWidth
        radius="md"
        style={{
          background: '#0096FF',
          fontWeight: 600,
          fontSize: 16,
          marginTop: 8,
          height: 40,
        }}
      >
        Apply Now
      </Button>
    </Card>
  );
}