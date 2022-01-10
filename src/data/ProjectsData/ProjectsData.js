import BollaImage from '../../images/bolla.png'
import GeekImage from '../../images/Geek.png'
import FleetImage from '../../images/Fleet.png'
export const projects = [
  {
    id:1, 
    projectTitle:"Bolla", 
    projectDesc:"A web app just for design and css practice. No api calls made.",
    projectStack:"ReactJs & Styled Component",
    projectLink:"https://thirsty-shannon-89bcae.netlify.app/",
    projectImg: BollaImage
  },
    {
    id:2, 
    projectTitle:"Geek Wacth", 
    projectDesc:"A web app for movie geeks. It shows the recent movies and tv shows.",
    projectStack:"ReactJs, Redux, Styled Component & The Movie Database API",
    projectLink:"https://geek-watch.netlify.app/",
    projectImg: GeekImage
  },
  {
    id:3, 
    projectTitle:"Fleet", 
    projectDesc:"An image sharing app.",
    projectStack:"ReactJs, Tailwind Css, Sanity.io",
    projectLink:"https://fleet-image-sharing-app.netlify.app/",
    projectImg: FleetImage
  },
]