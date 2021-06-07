import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Contact me and tell me about your ideas or vision, then I'll help you choose the best design for your business. Send us your text, logos and images — if you have them. If not, There is  a huge library of professional photos to make your site  stunning and amazing`,
  },
  {
    id: 2,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Settle back while I designers build your mobile-friendly site in as few as 18 days or less, reflecting your industry and following your lead and input. I craft on  some of the most popular and flexible building platform such as  Joomla, WordPress, Laravel , Angular ,React, and Gatsby. It's easy to adjust or add to your site as your business grows, and I can help with that.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design & Development",
    text: `Need a Mobile App to make things easier for yor client or you have an amazing idea you want to make known? You are in the right place. Get in touch!.
`,
  },
  // {
  //   id: 4,
  //   icon: <FaTools className="service-icon" />,
  //   title: "Web Maintenance",
  //   text: `Need help maintaining your site? I can run you through a 30-minute training session to show you the ropes. Want more?
  //    No sweat. I am here for you to talk to when inspiration strikes and you want to make updates to your site. We’ll talk it out and do the work for a low hourly rate.`,
  // },
]

export default services
