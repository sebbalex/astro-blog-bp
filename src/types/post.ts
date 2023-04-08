export interface IndexData {
  title: string;
  description: string;
}

export interface Frontmatter {
  title: string;
  username: string;
  subtitle: string;
  published_at: string;
}
export interface CardProps {
  slug: string;
  title: string;
  publish_date: string;
  author: string;
  description: string;
  splash: string;
  alt: string;
  isNew?: string;
  isTrending?: string;
  tags?: string[];
  splash_credits: string;
}
export interface Dataa {
  [key: string]: {
    frontmatter: Frontmatter;
    posts: Post[];
  } & CardProps;
}

export interface Data extends CardProps {
  frontmatter: Frontmatter;
  posts: Post[];
}

export type Langs = "it" | "en";

export type UILangs = {
  [key in Langs]: { [key: string]: string };
};

export type LabelLangs = {
  [key in Langs]: string;
};

export type LocalizedData = {
  [key in Langs]: Data[];
};

export interface BlogProps {
  lang: Langs;
  slug?: string;
}

export interface Post {
  id: number;
  title: string;
  // description: { [key in langs]: string };
  description: string;
  specification: string;
  author: string;
  slug: string;
  image: string;
  avatar: string;
  cta: string;
  motto: string;
  created_at: string;
  pros: string[];
  cons: string[];
  review: string;
  stars: number;
  tags: string[];
  isNew: boolean;
}

type Jsonable =
  | string
  | number
  | boolean
  | null
  | undefined
  | readonly Jsonable[]
  | { readonly [key: string]: Jsonable }
  | { toJSON(): Jsonable };

export class BaseError extends Error {
  public readonly context?: Jsonable;

  constructor(
    message: string,
    options: { error?: Error; context?: Jsonable; cause: string } = {
      cause: "",
    }
  ) {
    const { cause, context } = options;

    super(message, { cause });
    this.name = this.constructor.name;

    this.context = context;
  }
}

export type Result<T, E extends BaseError = BaseError> =
  | { success: true; result: T }
  | { success: false; error: E };

export function ensureError(value: unknown): Error {
  if (value instanceof Error) return value;

  let stringified = "[Unable to stringify the thrown value]";
  try {
    stringified = JSON.stringify(value);
  } catch {
    /* empty */
  }

  const error = new Error(
    `This value was thrown as is, not through an Error: ${stringified}`
  );
  return error;
}
