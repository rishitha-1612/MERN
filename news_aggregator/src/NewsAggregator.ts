import { Service, Inject } from "typedi";

import { RSSFeedSource } from "./RSSFeedSource";
import { NewsSource } from "./NewsSource";

import { Logger } from "./Logger";
import { CacheService } from "./CacheService";
import { AnalyticsService } from "./AnalyticsService";

@Service()
export class NewsAggregator {

  constructor(

    @Inject(() => RSSFeedSource)
    private source: NewsSource,

    private logger: Logger,

    private cache: CacheService,

    private analytics: AnalyticsService
  ) {}

  async getLatestArticles(): Promise<void> {

    this.logger.log("Fetching latest articles...");

    const cachedArticles = this.cache.get("articles");

    if (cachedArticles) {

      this.logger.log("Returning articles from cache");

      cachedArticles.forEach((article: string) => {
        console.log(article);
      });

      return;
    }
    const articles = await this.source.fetchArticles();

   
    this.cache.set("articles", articles);

    this.analytics.track("articles_fetched");

    articles.forEach(article => {
      console.log(article);
    });
  }
}