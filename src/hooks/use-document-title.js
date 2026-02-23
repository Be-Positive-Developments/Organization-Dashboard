import { useEffect } from 'react';

/**
 * Hook to set the document title
 * @param {string} title - The title to set
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
