import * as Cheerio from "cheerio";

export async function fetchBrokers() {
  const href = "https://onerep.com/sites-we-remove-from/";
  const res = await fetch(href);
  const html = await res.text();
  const $ = Cheerio.load(html);
  const brokers = $("ul.brokers-list li").map(function () {
    return $(this).text().trim();
  }).get();
  return Array.from(new Set(brokers));
}
