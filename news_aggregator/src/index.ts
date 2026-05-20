import "reflect-metadata";

import { Container } from "typedi";

import { NewsAggregator } from "./NewsAggregator";

async function bootstrap() {

  const aggregator = Container.get(NewsAggregator);

  await aggregator.getLatestArticles();

  console.log("\nRunning again to demonstrate cache...\n");

  await aggregator.getLatestArticles();
}

bootstrap();