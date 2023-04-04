import { useState, useEffect } from 'react';
import { Button } from '@/shared/ui/Button/Button';

// Компоненет для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
    // eslint-disable-next-line i18next/no-literal-string
    >
      throw Error
    </Button>
  );
};
