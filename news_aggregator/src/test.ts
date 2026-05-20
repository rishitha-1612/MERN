import "reflect-metadata";

import { Container } from "typedi";

import { NewsAggregator } from "./NewsAggregator";

import { RSSFeedSource } from "./RSSFeedSource";
import { APISource } from "./APISource";

// Replace RSSFeedSource with APISource
Container.set(RSSFeedSource, new APISource());

async function runTest() {

  const aggregator = Container.get(NewsAggregator);

  await aggregator.getLatestArticles();
}

runTest();