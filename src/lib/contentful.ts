import contentful, { Asset, EntryFieldTypes } from "contentful";

type HeroImageEntrySkeleton = {
  contentTypeId: "heroImage";
  fields: {
    file: EntryFieldTypes.Text;
  };
};

export interface HeroImage {
  fields: {
    file: {
      url: string;
    };
  };
}
export interface BlogPost {
  contentTypeId: "astroBlog";
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    heroImage: Asset & HeroImage,
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
