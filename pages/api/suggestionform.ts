import { Client } from '@notionhq/client';
import { notionType } from '$utils/helper/notiontype';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const notion = new Client({ auth: process.env.NOTION_API_KEY_ROADMAP as string });

    const email = req.body.email;
    const type = notionType(req.body.type);
    const suggestion = `${req.body.suggestion}`;

    if (!email || !type || !suggestion) {
        return res.status(400).json({ data: 'Not found' });
    }

    const response = await notion.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE_SUGGESTION_ID as string,
        },
        properties: {
            From: {
                title: [
                    {
                        text: {
                            content: email,
                        },
                    },
                ],
            },
            Tags: {
                select: {
                    name: type,
                },
            },
            Suggestion: {
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: suggestion,
                        },
                    },
                ],
            },
        },
    });

    res.status(200).send(response);
}
