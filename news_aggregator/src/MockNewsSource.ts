import { NewsSource } from "./NewsSource";

export class MockNewsSource implements NewsSource {

  async fetchArticles(): Promise<string[]> {

    return [
      "Mock: Test Article 1",
      "Mock: Test Article 2"
    ];
  }
}