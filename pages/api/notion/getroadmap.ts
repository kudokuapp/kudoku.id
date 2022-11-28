import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY_ROADMAP as string,
  });
  const databaseId = process.env.NOTION_DATABASE_ROADMAP_ID as string;

  try {
    const responsePlanning = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Status',
        status: {
          equals: 'Planning',
        },
      },
    });
    const dataPlanning = responsePlanning.results;

    const responseInProgress = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Status',
        status: {
          equals: 'In progress',
        },
      },
    });
    const dataInProgress = responseInProgress.results;

    const responseUnderReview = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Status',
        status: {
          equals: 'Under Review',
        },
      },
    });
    const dataUnderReview = responseUnderReview.results;

    const data = { dataPlanning, dataInProgress, dataUnderReview };

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(e);
  }
}
