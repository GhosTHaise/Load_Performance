import { groq } from "next-sanity";
import { readclient } from "./lib/client";

interface GetResourcesParams {
    query : string;
    category : string;
    page : string;
}

export const getResources = async (params : GetResourcesParams) => {
    const {query ,category, page} = params ;

    try {
        const resources = await readclient.fetch(
            groq``
        )
    } catch (error) {
        
    }
}