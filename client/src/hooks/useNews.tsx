import { useCallback, useContext } from "react";
import { NewsContext } from "@/providers/NewsContextProvider";
import { NewsDataArticle } from "@/types/news";
import { 
  setNewsArticles, 
  setNewsByCategory, 
  setNewsReadArticle, 
  setNextPage, 
  setRelatedNews 
} from "@/store/news";

export default function useNews() {
  const [news, dispatch] = useContext(NewsContext);

  const updateArticles = useCallback((articles: NewsDataArticle[]) => {
    if (dispatch) {
      dispatch(setNewsArticles(articles));
    }
  }, [dispatch]);

  const updateRelated = useCallback((related: NewsDataArticle[]) => {
    if (dispatch) {
      dispatch(setRelatedNews(related));
    }
  }, [dispatch]);

  const updateNewsByCategory = useCallback((category: string, articles: NewsDataArticle[]) => {
    if (dispatch) {
      dispatch(setNewsByCategory({category: category, articles: articles}));
    }
  }, [dispatch]);

  const preFetchArticle = useCallback((article: NewsDataArticle | null) => {
    if (dispatch) {
      dispatch(setNewsReadArticle(article));
    }
  }, [dispatch]);

  const keepNextPageKey = useCallback((page: string | null) => {
    if (dispatch) {
      dispatch(setNextPage(page));
    }
  }, [dispatch]);

  return {
    sources: news?.sources,
    articles: news?.articles,
    related: news?.related,
    newsByCategory: news?.newsByCategory,
    article: news?.article,
    page: news?.nextPage,
    updateArticles,
    updateRelated,
    updateNewsByCategory,
    preFetchArticle,
    keepNextPageKey,
  };
}
