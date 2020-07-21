declare interface IimagePayload {
  title: string;
  link: string;
  media: {
    m: string;
  };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

declare interface IStore {
  ecommerceSKUs: any;
  router: {
    location: {
      pathname: string;
    };
    action: string;
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: any;
  };
}
