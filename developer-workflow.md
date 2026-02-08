# Developer Workflow

This document intents to provide context on how what was the thought process to build this project, as well as how and which tools were used to build it. development time (~4 hours)

from the begining, the main idea for the project was to build the application using feature driven development patterns and the latest features of Next.js and React.

with that in mind, the first step was to create the project using the t3-app template, which already provides a solid foundation for building full-stack applications using Next.js, TypeScript, and tRPC.

for the purpose of this project, we are not going to use tRPC, so we keep the project simple and focused on the frontend.

so with that in mind, i started designing what prompt i wanted to use to generate the files for the project.

## The Prompt

"I need you to build a project that we are going to call artist dashboard, this project will be a front-end only solution where we have to handle and apply the latest features using Next.js and React.


The project will be feature driven and will use tailwindCSS with radix under the hood. 


The main features of the project will be 3 different content pages that will show as dashboard for the final user representing differente types of data.


1. Releases Page
    should have a grid of releases where the releases can range between a single, an EP or an Album, such releases should have an artwork and a title, and show streams and sales aswell as revenue, it should have a simple hover animation that zooms in on the image


2. Analytics Page 
    the analytics page should have a top overview section with a revenue chart and a platform breakdown chart, 
    and release analitycs section with a list of the top releases and when you click, you can see the release individual performance


3. Engagement Page 
    the engagement page should have a top overview section with a platform stream usage chart with the top platforms for the artist, it should have a demographics chart and a section of releases filtered by their engagement


All of this must be responsive and mobile friendly, you can ask any questions you need to make sure you have full context of the project"


## The Development Process

During the entire process i worked with Claude Opus 4.5 thinking in the Antigravity IDE (i wanted to test out the ecosystem).

The previous prompt helped me setup a strong and solid foundation for the project, nontheless, i needed still to handle several more things and overall details about the project and how it should look and function.

so, i started working along with the coding agent to shape the project and its features to my liking and how i envisioned it to be.

some examples can be found in the AI_and_Decisions_Overview.md file, and how the agent handled the prompts given.

there were a couple of instances where i prompted the agent to do a certain action and it behaved weirdly because i did not give it enough context or was not clear enough.

overall, the prompts i gave were clear enough to get the objective i wanted at the time, some examples can be summarized as:

1. I need you to fix or change the colors of the charts to match the theme of the project.
2. I need you to change the layout of the page so the navigation works better.
3. I need you to fix the overall layout of the page so we can change the style of the project.

