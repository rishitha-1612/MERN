import { Service } from "typedi";

@Service()
export class AnalyticsService {

  track(event: string): void {

    console.log(`[ANALYTICS]: ${event}`);
  }
}