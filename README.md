This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployed on Vercel

[Access the live version of the website under https://tech-recruitment.vercel.app/](https://tech-recruitment.vercel.app/).

## Running this project locally

1. Clone this repository and open it in your Code Editor of choice.

2. Open the terminal in your Code Editor.

3. Install the packages required to run the project by running either:

```bash
npm install
# or
yarn install
```

4. After installation run the development server with either of the following commands:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## The goal of the project

Create a recruitment agency website to list, serach and filter the currently available vacancies, showcase detailed information about the positions and give the users the option to send a complete job application through the platform.

My goal with this project was to work closely with data in a React application, learn about implementing filters and pagination using different libraries and connect multiple platforms to create a smooth browsing experience for the visitors of the site surrounded by a simple, but modern minimalist UI design.

## Achievements

The website allows you to:

- list available job opportunities under the /vacatures page
- always get the most up-to-date job list from the agency's Contentful collection (applied Incremental Static site Regeneration /ISR/)
- search vacancies with keywords
- apply different filters to the vacancies available
- clear the applied search keywords and filters
- navigate between pages of jobs listed using dynamic pagination (6 results/page)
- go to an overview page about each vacancy
- apply to jobs through a costumized form
- upload documents as part of the application
- get a visual feedback after submitting any form
- sign up to a mailing list
- contact the agency using a contact form
- get a custom 404 and error page with meaningful information about the problem occured and redirect to hom page after 3 seconds

## Technologies used to create the project

- The website is a Next.js project created by [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- The components are styled using a custom [Material-UI theme](https://material-ui.com/).
- The vacancy data displayed is fetched from a [Contentful](https://www.contentful.com/) collection using the [Contentful Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
- The filtering and pagination are implemented using the [Vercel SWR React Hooks Library](https://swr.vercel.app/).
- The website is delpoyed using [Vercel](https://vercel.com/). You can access the website via [https://tech-recruitment.vercel.app/](https://tech-recruitment.vercel.app/).

## User stories - the app's functionality from the user's perspective

- As a user, I want to see an overview of the recruitment company so that I get can a general idea what type of jobs there are available.
- As a user, I want to search for job titles and keywords so that I can find jobs I am interested in.
- As a user, I want to access a list of jobs available, and clicking on one I want to get information about the company, the responsibilities, the indicated salary and the experience level required.
- As a user, I want to be able to apply for a job through the site so that I can get contacted later.
- As a user, I want to have the option to upload my CV and motivation letter so that I can send a complete appplication via the site.
- As a user, I want to be able to filter jobs so that I can find exactly what I am looking for.
- As a user, I want to be able to contact the company through the website, so that I can ask questions.
- As a user, I want to receive feedback after submitting a form so that I know my information was successfully sent.

## Features of the Website (from user stories)

- Landing page displaying: the goal of the company, the recruitment team, the partner firms, types of jobs and services provided.
- Sign up form to gather contact information, upload CV, pick from job preferences.
- Vacancies listed with the job title, the experience level, the pay indication, the position description overview, and the recruiter responsible.
- Large number of vacancies navigated via pagination.
- Application form tailored to the vacancy with fields for name, email, cv and if required, motivation letter.
- Filters for location, full-time, part-time, salary range.
- Searchbar that looks up the keywords in the complete vacancy document (including responsibilities, role and company descriptions).
- Contact form with name, email and message fields.
- Subscription form to get on the mailing list.
- Confirmation message displayed in the UI after submitting application, contact or subsription forms.

## Future of the project

The following features implemented would improve the usability and user experience of the website in the future:

- Add contact form for companies.
- Add recruiter responsible for each vacancy.
- Create blog about interview tips, portfolio requirements and coaching.
- Filters for experience levels, programming languages and checkbox for working from home option.
- Personal profile and Sign-in for an enhanced use experience.
- Back-end middleware function responsible for email sending using nodemailer.
- Implementation of automated response emails.

## Inspiration

The design of the project was inspired by the website of (Codecareer IT recruitment agency)[https://codecareer.nl/].

## Solutions and considerations

# SWR - filtering and pagination on the client side from Cache

SWR (stale-while-revalidate) is an HTTP Cache revalidation strategy to fetch, revalidate and manage data on the client side instead of the usual combination of React hooks, useState and useEffect.

Initial data is coming from getStaticProps method, which fetches the data for the statically generated site (/vacatures) at generation time.

In my project SWR works together with getStaticProps through the useSWR hook to manage the data displayed on the site. The initial data is provided by getStaticProps. The fetcher function is located in utils/contentful.js in the ContentFulApi class. The getValues() asynchronos method fetches the possible filter field values, the callContentful() asynchronos method gets the "jobs" collection data entries from the Contentful Content Delivery API.

The callContentful() method takes in two arguments which is passed into the fetcher function through the SWR key: query and page. The query is an object with keys from the possible fields for filtering in the application, the values are coming from a form filled in by the user.

As soon as the query object is updated in the component's state, the fetcher function executes and retrieves the matching results from the initial data with a 6 results/page pagination.

Want to use SWR in your project? Here's where I have learned how to use it:

- [SWR documentation](https://swr.vercel.app/docs/getting-started)
- [Vercel SWR GitHub repository](https://github.com/vercel/swr)

# Material-UI integration with Next.js

After the initial setup to integrate Material-UI based on the repository provided I still had issues using the styled components from the library.

In this project:

- I used a cutom Material-UI theme (src/theme.js)
- I wrapped my page components with a layout component (components/layout.jsx)
- I wrote custom css for each component individually using the makeStyles() hook from Material-UI

Certain components from Material-UI v4.3.1 (eg.: Box) still threw an error after integrating the library with Next.js, but the styling was applied as expected.

This problem has been acknowledged by both libraries and it seems to be an issue coming from Material-UI. To overcome this issue I had to remove "reactStrictMode: true," line from next.config.js.

Have a similar issue in your setup? This is where I found answers:

- [Box component odd behavior on Next.js](https://github.com/mui-org/material-ui/issues/19679)

# Documentation used to create this project

- [SWR - React Hooks library for data fetching](https://swr.vercel.app/docs/with-nextjs)

- [Contentful - Documentation: Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)

- [React Select Component Documentation](https://react-select.com/home)

- [Material-UI - NextJs Example /Github Repository/](https://github.com/mui-org/material-ui/tree/next/examples/nextjs)

- [Vercel SWR GitHub repository](https://github.com/vercel/swr)

- [Static file serving - Next.js documentation](https://nextjs.org/docs/basic-features/static-file-serving)

# Articles used to create this project

Eventually, I have decided to use the Content Delivery API of Contantful to fetch and query data for the project, but for some time I was experimenting with the Contentful GraphQL Content API.

The following articles provided me with the information to make the best decision for the project:

- [Paginating your Contentful blog posts in Next.js with the GraphQL API](https://www.contentful.com/blog/2021/04/23/paginating-contentful-blogposts-with-nextjs-graphql-api/)

- [Next.js, Contentful CMS, GraphQL, oh my!](https://bholmes.dev/blog/nextjs-contentful-cms-graphql-oh-my/)

# Media Resources

- [Pexels.com](https://www.pexels.com/)
- [Pixabay.com](https://pixabay.com/)
- [Unsplash.com](https://unsplash.com/)
