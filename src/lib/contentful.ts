import contentful, {
  Asset,
  Entry,
  EntryFieldType,
  EntryFieldTypes,
} from "contentful";

export interface HeroImage {
  fields: {
    description: EntryFieldTypes.Text;
    file: {
      url: EntryFieldTypes.Text;
    };
  };
}

export interface BlogTags{
  contentTypeId: "astroTags";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
  sys: {
    contentType: {
      sys: {
        id: EntryFieldTypes.Text;
      };
    };
  };
}
export interface BlogCategory {
  contentTypeId: "astroCategories";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
  sys: {
    contentType: {
      sys: {
        id: EntryFieldTypes.Text;
      };
    };
  };
}

export type Category = Entry<BlogCategory>;
export type Tags = Array<Entry<BlogTags>>;
export type TagType = Entry<BlogTags>;

export interface BlogPost {
  contentTypeId: "astroBlog";
  sys: {
    createdAt: EntryFieldTypes.Date;
    updatedAt: EntryFieldTypes.Date;
  };
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    heroImage: Asset;
    tags: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<BlogTags>>;
    category: EntryFieldTypes.EntryLink<BlogCategory>;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
