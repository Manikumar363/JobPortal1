'use client';
import {
  Box,
  Button,
  Center,
  Grid,
  Group,
  NumberInput,
  Paper,
  Select,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconChevronDown, IconCurrencyRupee, IconChevronRight, IconCalendar } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function CreateJobForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [salaryMin, setSalaryMin] = useState<number | ''>('');
  const [salaryMax, setSalaryMax] = useState<number | ''>('');
  const [applicationDeadline, setApplicationDeadline] = useState<Date | null>(null);

  return (
    <Box>
      {/* Dimmed overlay */}
      <Box
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.15)',
          zIndex: 1000,
        }}
      />
      {/* Centered modal */}
      <Center style={{ position: 'fixed', inset: 0, zIndex: 1001 }}>
        <Paper
          radius={24}
          p={40}
          shadow="xl"
          style={{
            maxWidth: 600,
            width: '90vw',
            background: '#fff',
            borderRadius: 24,
          }}
        >
          <form>
            <Title order={2} ta="center" mb={32} fw={700} style={{ fontSize: 28 }}>
              Create Job Opening
            </Title>
            <Grid gutter={24} mb={16}>
              <Grid.Col span={6}>
                <TextInput
                  label="Job Title"
                  placeholder="Full Stack Developer"
                  radius="md"
                  size="md"
                  {...register('jobTitle', { required: true })}
                  error={errors.jobTitle && 'Job title is required'}
                  styles={{
                    input: { borderRadius: 12, border: '1.5px solid #bbb', fontSize: 16 },
                    label: { fontWeight: 600, marginBottom: 8 },
                  }}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  label="Company Name"
                  placeholder="Amazon"
                  radius="md"
                  size="md"
                  {...register('companyName', { required: true })}
                  error={errors.companyName && 'Company name is required'}
                  styles={{
                    input: { borderRadius: 12, border: '1.5px solid #bbb', fontSize: 16 },
                    label: { fontWeight: 600, marginBottom: 8 },
                  }}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label="Location"
                  placeholder="Chennai"
                  radius="md"
                  size="md"
                  data={['Chennai', 'Bangalore', 'Remote']}
                  rightSection={<IconChevronDown size={18} />}
                  styles={{
                    input: { borderRadius: 12, border: '1.5px solid #bbb', fontSize: 16 },
                    label: { fontWeight: 600, marginBottom: 8 },
                  }}
                  onChange={(value) => setValue('location', value)}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  label="Job Type"
                  placeholder="FullTime"
                  radius="md"
                  size="md"
                  data={['Internship', 'Full Time', 'Partime', 'Contract']}
                  rightSection={<IconChevronDown size={18} />}
                  styles={{
                    input: { borderRadius: 12, border: '1.5px solid #bbb', fontSize: 16 },
                    label: { fontWeight: 600, marginBottom: 8 },
                  }}
                  onChange={(value) => setValue('jobType', value)}
                />
              </Grid.Col>
              {/* Salary Range and Application Deadline in the same row */}
              <Grid.Col span={6}>
                <Group gap={12} grow>
                  <NumberInput
                    label="Salary Range"
                    placeholder="₹ 0"
                    radius="md"
                    size="md"
                    value={salaryMin}
                    onChange={setSalaryMin}
                    icon={<IconCurrencyRupee size={16} />}
                    styles={{
                      input: { borderRadius: 12, border: '1.5px solid #bbb', fontSize: 16 },
                      label: { fontWeight: 600, marginBottom: 8 },
                    }}
                  />
                  <NumberInput
                    label="."
                    placeholder="₹ 12,00,000"
                    radius="md"
                    size="md"
                    value={salaryMax}
                    onChange={setSalaryMax}
                    icon={<IconCurrencyRupee size={16} />}
                    styles={{
                      input: { borderRadius: 12, border: '1.5px solid #bbb', fontSize: 16 },
                      label: { fontWeight: 600, marginBottom: 8 },
                    }}
                  />
                </Group>
              </Grid.Col>
              <Grid.Col span={6}>
                <DateInput
                  label="Application Deadline"
                  placeholder="Pick a date"
                  radius="md"
                  size="md"
                  value={applicationDeadline}
                  onChange={(value: Date | null) => setApplicationDeadline(value)}
                  rightSection={<IconCalendar size={16} />}
                  styles={{
                    input: { borderRadius: 12, border: '1.5px solid #bbb', fontSize: 16 },
                    label: { fontWeight: 600, marginBottom: 8 },
                  }}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Textarea
                  label="Job Description"
                  placeholder="Please share a description to let the candidate know more about the job role"
                  radius="md"
                  size="md"
                  minRows={6}
                  {...register('jobDescription', { required: true })}
                  error={errors.jobDescription && 'Job description is required'}
                  styles={{
                    input: { borderRadius: 12, border: '1.5px solid #bbb', fontSize: 16 },
                    label: { fontWeight: 600, marginBottom: 8 },
                  }}
                />
              </Grid.Col>
            </Grid>
            <Group justify="space-between" mt={32}>
              <Button
                variant="outline"
                color="dark"
                radius="md"
                size="md"
                rightSection={<IconChevronDown size={18} />}
                style={{
                  border: '2px solid #222',
                  fontWeight: 600,
                  fontSize: 16,
                  padding: '0 32px',
                  height: 44,
                  background: '#fff',
                }}
              >
                Save Draft
              </Button>
              <Button
                radius="md"
                size="md"
                rightSection={<IconChevronRight size={20} />}
                style={{
                  background: '#0096FF',
                  fontWeight: 600,
                  fontSize: 16,
                  padding: '0 40px',
                  height: 44,
                  color: '#fff',
                }}
              >
                Publish
              </Button>
            </Group>
          </form>
        </Paper>
      </Center>
    </Box>
  );
}