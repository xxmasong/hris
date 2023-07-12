import { useCallback, useEffect, useState } from 'react';
import useScrollPagination from '@/hooks/useScrollPagination';
import { homeArticles } from '@/services/NewsService';
import useNews from './useNews';
import useAuth from './useAuth';

export default function useHeadlineNews() {
  const {user, validating} = useAuth();
  const {articles, page, updateArticles, keepNextPageKey} = useNews();
  const [loading, setLoading] = useState(false);

  const onLoadMoreByOffset = useCallback(async () => {
    setLoading(true);   
    let country:string[] = [];
    if (user && user?.country) {
      country = [user?.country?.code];
    }
    const news = await homeArticles(country, page);
    if (news?.status === 'success') {
      updateArticles([...articles!, ...news.results]);
      keepNextPageKey(news?.nextPage);
    }
    setLoading(false);
  }, [user, articles, keepNextPageKey, page, updateArticles]);

  useEffect(() => {
    if (!validating) {
      if (articles && articles?.length <= 10) {
        onLoadMoreByOffset();
      }
    }
  }, [validating]);

  useScrollPagination({
    offset: articles?.length,
    onLoadMoreByOffset,
  });

  return { articles, loading };
}
