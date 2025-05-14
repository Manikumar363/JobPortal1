'use client';
import { Group, Button, Box, Text, Image } from '@mantine/core';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Find Jobs', href: '/jobs' },
  { label: 'Find Talents', href: '#' },
  { label: 'About us', href: '#' },
  { label: 'Testimonials', href: '#' },
];

export default function Header() {
  return (
    <Box
      style={{
        background: '#fff',
        borderRadius: 122,
        boxShadow: '0px 0px 20px rgba(127, 127, 127, 0.15)',
        maxWidth: 890,
        margin: '32px auto',
        padding: '0 48px',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <Group justify="start" gap={8}>
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </Group>

      {/* Navigation */}
      <Group gap={40} style={{ flex: 1, justifyContent: 'center' }}>
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} style={{ textDecoration: 'none' }}>
            <Text size="md" fw={500} c="#222">
              {link.label}
            </Text>
          </Link>
        ))}
      </Group>

      {/* Create Jobs Button */}
      <Link href="/jobs/create">
        <Button
          radius="xl"
          size="md"
          style={{ background: 'linear-gradient(90deg, #A259FF 0%, #3F5FFF 100%)' }}
        >
          Create Jobs
        </Button>
      </Link>
    </Box>
  );
}
