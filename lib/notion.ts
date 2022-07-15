import fetch, { Body } from 'node-fetch';
import { Experiences, ExperienceData } from '../components/experience';
import { ProjectCard, ProjectCards } from '../components/projects';

// sorting function for list of objects
const sortObj = (a: any, b: any) => { return a.key - b.key };

// notion api url prefix and headers
const notionAPIPrefix = 'https://api.notion.com/v1';
var notionAPIHeaders = {
    "Notion-Version": "2022-02-22",
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`
};

// content for the about section
export async function getAboutContent () {
    const blockID = 'c274ed88-e606-4595-ad08-4c2f1096be27';
    const rawResponse: Body = await fetch(`${notionAPIPrefix}/blocks/${blockID}`, {
        method: 'GET',
        headers: notionAPIHeaders
    });
    
    const response: any = await rawResponse.json();
    const aboutContent = response['code']['rich_text'][0]['text']['content'];
    return aboutContent;
};

// content for the experience cards section
export async function getExperienceContent () {
    const databaseID = '5d1bac61-a6b6-4daf-a2e3-58eeea7077ef';
    const rawResponse: Body = await fetch(`${notionAPIPrefix}/databases/${databaseID}/query`, {
        method: 'POST',
        headers: notionAPIHeaders
    });
    const response: any = await rawResponse.json();
    
    const experienceContent: Experiences = {
        experiences: response['results'].map((row: any) => {
            const experienceData: ExperienceData = {
                key:        row['properties']['order']['number'],
                company:    row['properties']['company']['title'][0]['plain_text'],
                role:       row['properties']['role']['rich_text'][0]['plain_text'],
                dateRange:  row['properties']['dateRange']['rich_text'][0]['plain_text'],
                details:    row['properties']['details']['rich_text'][0]['plain_text'].split(' | ')
            } 
            return experienceData;
        }).sort(sortObj)
    };
   
    return experienceContent; 
};

// content for the project cards section
export async function getProjectsContent () {
    const databaseID = '0239155c-d419-4ce3-8cee-3710616a2246';
    const rawResponse: Body = await fetch(`${notionAPIPrefix}/databases/${databaseID}/query`, {
        method: 'POST',
        headers: notionAPIHeaders 
    });
    const response: any = await rawResponse.json();
    
    const projectsContent: ProjectCards = {
        projects: response['results'].map((row: any) => {
            const projectCard: ProjectCard = {
                key:            row['properties']['order']['number'],
                name:           row['properties']['name']['title'][0]['plain_text'],
                description:    row['properties']['description']['rich_text'][0]['plain_text'],
                tools:          row['properties']['tools']['rich_text'][0]['plain_text'],
                url:            row['properties']['url']['rich_text'][0]['href']
            };
            return projectCard;
        }).sort(sortObj)
    };
    
    return projectsContent;
};
