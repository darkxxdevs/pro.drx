import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  //bright data proxy configs
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);

  //   curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_9c086b2e-zone-unblocker:tealwu8ar63p -k https://lumtest.com/myip.json
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorised: false,
  };

  try {
    // fetch the product page
    const response = await axios.get(url, options);
    console.log(response.data);
  } catch (error: any) {
    throw new error(`failed to scrape product : ${error.message}`);
  }
}
