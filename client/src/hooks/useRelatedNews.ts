import { useCallback, useEffect, useState } from 'react';
import { NewsDataArticle } from '@/types/news';
import { relatedArticles } from '@/services/NewsService';
import useNews from './useNews';
import useAuth from './useAuth';

export default function useRelatedNews() {
  const {user, validating} = useAuth();
  const {article, related, updateRelated} = useNews();
  const [loading, setLoading] = useState(false);

  const onLoadMoreByOffset = useCallback(async () => {
    setLoading(true);
    updateRelated([]);
    let country:string[] = [];
    if (user && user?.country) {
      country = [user?.country?.code];
    }
    let category:string[] = [];
    if (article?.category && article?.category?.length > 0) {
      category = article.category;
    } 
    const news = await relatedArticles(article?.keywords, category, country);
    if (news?.status === 'success') {
      updateRelated([
        ...(news?.results || []).filter((newData: NewsDataArticle) => {
          return article?.title !== newData.title;
        }),
      ]);
    }
    setLoading(false);
  }, [article, updateRelated]);

  useEffect(() => {
    if (!validating) {
      if (article?.title) {
        onLoadMoreByOffset();
      }
    }
  }, [validating, article?.title]);

  return { related, loading };
}
