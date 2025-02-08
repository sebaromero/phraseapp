const MockIcon = ({ 'data-testid': testId }: { 'data-testid'?: string }) => (
  <svg data-testid={testId || 'mock-icon'} />
)

export const Trash2 = () => <MockIcon data-testid="mock-trash-icon" />
