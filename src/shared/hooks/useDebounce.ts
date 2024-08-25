import { useEffect, useMemo, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useLazySearchUsersQuery } from '@/shared';

export const useDebounce = () => {
  const suggestRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [isSuggestVisible, setIsSuggestVisible] = useState(false);
  const [text, setText] = useState<string>('');
  const [trigger, { currentData, isLoading, isFetching }] = useLazySearchUsersQuery();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      suggestRef.current &&
      !suggestRef.current.contains(e.target as Element) &&
      e.target !== inputRef.current
    ) {
      setIsSuggestVisible(false);
    }
  };

  const onSearchFocus = () => {
    setIsSuggestVisible(true);
    trigger({ email: '' });
  };

  const debouncedChangeHandler = useMemo(
    () => debounce((userInput: string) => trigger({ email: userInput }), 1500),
    [trigger],
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  function handleInputChange(searchText: string) {
    setText(searchText);
    debouncedChangeHandler(searchText);
  }

  return {
    handleInputChange,
    isLoading: isLoading || isFetching,
    currentData,
    suggestHided: setIsSuggestVisible,
    isSuggestVisible,
    onSearchFocus,
    suggestRef,
    inputRef,
    text,
  };
};
