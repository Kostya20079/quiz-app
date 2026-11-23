export type TestSummary = {
  id: string;
  name: string;
  description: string;
  numberOfTasks: number;
};

export const TESTS: TestSummary[] = [
  {
    id: "general-knowledge",
    name: "General knowledge",
    description: "Check your knowledge across history, science and culture.",
    numberOfTasks: 10,
  },
  {
    id: "technology",
    name: "Technology",
    description: "Answer questions about computers and modern technology.",
    numberOfTasks: 8,
  },
];

export function findTest(testId: string): TestSummary | undefined {
  return TESTS.find((test) => test.id === testId);
}