import { useMemo } from 'react';
import SearchTemplate from '@/components/templates/SearchTemplate';
import LargeSearchInput from '@/components/organisms/search/LargeSearchInput';
import SearchResult from '@/components/organisms/search/SearchResult';
import { RouteComponentProps } from 'react-router';
import qs from 'qs';

function SearchPage({ location }: RouteComponentProps) {
  const query = useMemo(() => {
    const parsed = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }) as { q: string };

    return parsed;
  }, [location.search]);

  return (
    <SearchTemplate>
      <LargeSearchInput initialKeyword={query.q} />
      <SearchResult keyword={query.q} />
    </SearchTemplate>
  );
}

export default SearchPage;
