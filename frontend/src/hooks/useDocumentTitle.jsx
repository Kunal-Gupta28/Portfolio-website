import { useEffect } from "react";

const useDocumentTitle = (title, options = {}) => {
  const { restoreOnUnmount = false } = options;

  useEffect(() => {
    if (!title) return;

    const prevTitle = document.title;
    document.title = title;

    // Restore previous title if needed
    return () => {
      if (restoreOnUnmount) {
        document.title = prevTitle;
      }
    };
  }, [title, restoreOnUnmount]);
};

export default useDocumentTitle;