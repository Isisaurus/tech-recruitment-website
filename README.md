This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployed on Vercel

[Click here to check out the live version of this project](https://tech-recruitment.vercel.app/);

## Running this project locally

Clone this repo and open it in your Code Editor of choice.

Open the terminal in your Code Editor.

Install the packages required to run the project by running either:

```bash
npm install
# or
yarn install
```

After installation run the development server with either of the following commands:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Material-UI integration with Next.js

After the initial setup to integrate Material-UI based on the repository provided I still had issues using the styled components from the library.

In this project:

- I used a cutom Material-UI theme (src/theme.js)
- I wrapped my page components with a layout component (components/layout.jsx)
- I wrote custom css for each component individually using the makeStyles() hook from Material-UI

Certain components from Material-UI v4.3.1 (eg.: Box) still threw an error after integrating the library with Next.js, but the styling was applied as expected.

This problem has been acknowledged by both libraries and it seems to be an issue coming from Material-UI. To overcome this issue I had to remove "reactStrictMode: true," line from next.config.js.

Have a similar issue in your setup? This is where I found answers:
[Box component odd behavior on Next.js](https://github.com/mui-org/material-ui/issues/19679)

## Documentation used to create this project

[SWR - React Hooks library for data fetching](https://swr.vercel.app/docs/with-nextjs)

[Contentful - Documentation: Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)

[React Select Component Documentation](https://react-select.com/home)

[Material-UI - NextJs Example /Github Repository/](https://github.com/mui-org/material-ui/tree/next/examples/nextjs)

## Articles used to create this project

Eventually, I have decided to use the Content Delivery API of Contantful to fetch and query data for the project, but for some time I was experimenting with the Contentful GraphQL Content API.

The following articles provided me with the information to make the best decision for the project:

[Paginating your Contentful blog posts in Next.js with the GraphQL API](https://www.contentful.com/blog/2021/04/23/paginating-contentful-blogposts-with-nextjs-graphql-api/)

[Next.js, Contentful CMS, GraphQL, oh my!](https://bholmes.dev/blog/nextjs-contentful-cms-graphql-oh-my/)
