import { Service } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class APISource implements NewsSource {

  async fetchArticles(): Promise<string[]> {

    return [
      "API: Sports News",
      "API: Tech News",
      "API: World News"
    ];
  }
}