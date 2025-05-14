'use client';
import { Box, Group, TextInput, Select, Text, RangeSlider } from '@mantine/core';
import { IconSearch, IconMapPin, IconUser } from '@tabler/icons-react';
import { useState } from 'react';

// Custom ellipse divider
function EllipseDivider() {
  return (
    <Box
      style={{
        width: 4,
        height: 36,
        background: '#eee',
        borderRadius: 2,
        margin: '0 24px',
        alignSelf: 'center',
      }}
    />
  );
}

// Custom thumb for the slider
function CustomThumb(props: any) {
  return (
    <div
      {...props}
      style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '3px solid #111',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#111',
        }}
      />
    </div>
  );
}

export default function JobFilters() {
  const [salary, setSalary] = useState<[number, number]>([50000, 80000]);

  return (
    <Box
      style={{
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)',
        maxWidth: 1800,
        margin: '32px auto',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        height: 80,
      }}
    >
      {/* Search */}
      <Group style={{ flex: 1, minWidth: 0, height: 48 }} gap={8}>
        <IconSearch size={20} color="#888" />
        <TextInput
          size="md"
          variant="unstyled"
          placeholder="Search By Job Title, Role"
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: '#555',
            flex: 1,
            minWidth: 0,
          }}
        />
      </Group>
      <EllipseDivider />
      {/* Location */}
      <Group style={{ flex: 1, minWidth: 0, height: 48 }} gap={8}>
        <IconMapPin size={20} color="#888" />
        <Select
          size="md"
          variant="unstyled"
          placeholder="Preferred Location"
          data={['Chennai', 'Bangalore', 'Remote']}
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: '#555',
            flex: 1,
            minWidth: 0,
          }}
          rightSection={<span style={{ fontSize: 16, color: '#888' }}>▼</span>}
        />
      </Group>
      <EllipseDivider />
      {/* Job Type */}
      <Group style={{ flex: 1, minWidth: 0, height: 48 }} gap={8}>
        <IconUser size={20} color="#888" />
        <Select
          size="md"
          variant="unstyled"
          placeholder="Job type"
          data={['Full-time', 'Part-time', 'Contract', 'Internship']}
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: '#555',
            flex: 1,
            minWidth: 0,
          }}
          rightSection={<span style={{ fontSize: 16, color: '#888' }}>▼</span>}
        />
      </Group>
      <EllipseDivider />
      {/* Salary Filter */}
      <Box
        style={{
          flex: 1.5,
          minWidth: 0,
          paddingLeft: 16,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: 48,
        }}
      >
        {/* Label and Value Row */}
        <Group justify="space-between" align="flex-end" mb={10} style={{ width: '100%' }}>
          <Text fw={500} size="9" style={{ color: '#000' }}>
            Salary Per Month
          </Text>
          <Text fw={500} size="9" style={{ color: '#000' }}>
            ₹{salary[0] / 1000}k - ₹{salary[1] / 1000}k
          </Text>
        </Group>
        {/* Custom RangeSlider */}
        <RangeSlider
          min={0}
          max={200000}
          step={5000}
          value={salary}
          onChange={setSalary}
          styles={{
            track: {
              height: 2,
              background: `linear-gradient(to right, #111 0%, #111 ${((salary[0] / 200000) * 100)}%, #e5e1e1 ${((salary[0] / 200000) * 100)}%, #e5e1e1 100%)`,
            },
            bar: { background: '#000' },
          }}
          thumbChildren={
            <>
              {/* Example custom thumb content */}
              <Box w={10} h={10} 
               bg="black" style={{ borderRadius: '50%' }} />
            </>
          }
          size="md"
          mt={0}
          mb={0}
        />
      </Box>
    </Box>
  );
}