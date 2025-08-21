import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Robin",
  DESCRIPTION: "I'm a FullStack Developer",
  AUTHOR: "robin",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experiences",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Experience", 
    HREF: "/work",
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "robinbijudev@gmail.com",
    HREF: "mailto:robinbijudev@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "robin-UI",
    HREF: "https://github.com/robin-UI"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "robin biju",
    HREF: "https://www.linkedin.com/in/robin-biju-195a8a245/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "robinme12",
    HREF: "https://x.com/robinme12",
  },
]

