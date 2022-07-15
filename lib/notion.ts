import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

export async function getAboutContent () {
    const response: any = await notion.blocks.retrieve({
        block_id: 'c274ed88-e606-4595-ad08-4c2f1096be27',
    });
    const aboutContent = response['code']['rich_text'][0]['text']['content'];
    return aboutContent;
}

