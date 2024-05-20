<script setup>
import banner from '/images/banners/resources.webp'
import PostsCarousel from '../../components/PostsCarousel.vue';
import InnerHero from '../../components/InnerHero.vue';
import InsideBody from '../../components/InsideBody.vue';
import WebinarsList from '../../components/WebinarsList.vue';
import { getFeaturedBlogPosts } from '../../helpers/api'
import OneImageTextFlex from '../../components/OneImageTextFlex.vue';
const blogposts = getFeaturedBlogPosts()
const whitepaper ={ 
    id: 1, 
    title: 'Explore Our Whitepapers', 
    description: 'Dive deeper into key industry topics with our whitepapers. Gain valuable insights and actionable strategies to address complex challenges and drive business growth.', 
    image:'/images/insidepages/resources/whitepapers.webp' 
};
const industryInsights = [
  { 
    id: 1, 
    title: 'Increasing Efficiency in Food Production with IoT', 
    summary: 'Explore how IoT technology is optimizing food production processes and ensuring quality and safety standards.', 
    to: 'https://example.com/food-iot-insights', 
    target: '_blank', 
    date: '2024-04-26',
    category: "Food & Beverage"
  },
  { 
    id: 2, 
    title: 'Smart Solutions for Water Management', 
    summary: 'Discover innovative technologies and strategies for efficient water management and wastewater treatment.', 
    to: 'https://example.com/water-management-insights', 
    target: '_blank', 
    date: '2024-04-25',
    category: "Water & Wastewater"
  },
  { 
    id: 3, 
    title: 'Building Sustainable Infrastructure for Smart Cities', 
    summary: 'Learn about the integration of IoT and data analytics in urban planning to create smarter and more sustainable cities.', 
    to: 'https://example.com/smart-cities-insights', 
    target: '_blank', 
    date: '2024-04-24',
    category: "Smart Cities"
  },
  { 
    id: 4, 
    title: 'Digital Transformation in the Oil & Gas Industry', 
    summary: 'Explore how digital technologies such as AI and automation are revolutionizing operations and improving safety in the oil and gas sector.', 
    to: 'https://example.com/oil-gas-insights', 
    target: '_blank', 
    date: '2024-04-23',
    category: "Oil & Gas"
  },
  { 
    id: 5, 
    title: 'Innovations in Chemical Manufacturing', 
    summary: 'Discover the latest advancements in chemical manufacturing processes and how they are driving efficiency and sustainability.', 
    to: 'https://example.com/chemicals-insights', 
    target: '_blank', 
    date: '2024-04-22',
    category: "Chemicals"
  },
  // { 
  //   id: 6, 
  //   title: 'Transforming Power Grids with Smart Technology', 
  //   summary: 'Learn about the integration of smart meters and grid automation in modernizing power distribution networks and enhancing reliability.', 
  //   to: 'https://example.com/power-utilities-insights', 
  //   target: '_blank', 
  //   date: '2024-04-21',
  //   category: "Power & Utilities"
  // },
  // { 
  //   id: 7, 
  //   title: 'Advancements in Pharmaceutical Manufacturing', 
  //   summary: 'Explore how advancements in automation and data analytics are driving efficiency and compliance in pharmaceutical manufacturing.', 
  //   to: 'https://example.com/life-science-insights', 
  //   target: '_blank', 
  //   date: '2024-04-20',
  //   category: "Life Science"
  // },
  // { 
  //   id: 8, 
  //   title: 'Digitization Trends in Mining Operations', 
  //   summary: 'Discover how digital technologies are optimizing mining operations, from exploration to extraction, and improving safety and productivity.', 
  //   to: 'https://example.com/mining-digitization-insights', 
  //   target: '_blank', 
  //   date: '2024-04-19',
  //   category: "Metals, Mining, & Minerals"
  // },
];
// const webinars = [
//   { 
//     date: { day: 15, month: "May", year: 2024 },
//     title: "Harnessing AI for Industrial Efficiency",
//     description: "Explore the transformative potential of artificial intelligence in optimizing industrial processes and increasing efficiency.",
//     to: "/webinar/harnessing-ai",
//     target: "_blank"
//   },
//   { 
//     date: { day: 22, month: "May", year: 2024 },
//     title: "IoT Solutions for Smart Manufacturing",
//     description: "Discover how Internet of Things (IoT) technologies are revolutionizing manufacturing operations and enabling predictive maintenance.",
//     to: "/webinar/iot-smart-manufacturing",
//     target: "_blank"
//   },
//   { 
//     date: { day: 29, month: "May", year: 2024 },
//     title: "Blockchain Applications in Supply Chain Management",
//     description: "Learn about the role of blockchain technology in enhancing transparency and traceability in industrial supply chains.",
//     to: "/webinar/blockchain-supply-chain",
//     target: "_blank"
//   },
//   // { 
//   //   date: { day: 5, month: "June", year: 2024 },
//   //   title: "Advanced Robotics in Manufacturing",
//   //   description: "Discover the latest advancements in robotics technology and its applications in modern manufacturing.",
//   //   to: "/webinar/advanced-robotics",
//   //   target: "_blank"
//   // },
//   // { 
//   //   date: { day: 12, month: "June", year: 2024 },
//   //   title: "Sustainability in Industrial Operations",
//   //   description: "Learn about sustainable practices and technologies driving environmental stewardship in industrial operations.",
//   //   to: "/webinar/sustainability-industrial",
//   //   target: "_blank"
//   // },
//   // { 
//   //   date: { day: 19, month: "June", year: 2024 },
//   //   title: "Future of Digital Twin Technology",
//   //   description: "Explore the potential of digital twin technology in revolutionizing product design, testing, and maintenance.",
//   //   to: "/webinar/digital-twin-future",
//   //   target: "_blank"
//   // }
// ];

</script>

<template>
    <head>
      <title>AITS - Resources</title>
      <meta name="description" content="Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."/>
    </head>
    <InnerHero :pagebanner="banner" pagetitle="Resources" pagedescription="Need some resources to explore the complex world of software solutions? Welcome to the home of the latest industry news, insights, trends, and much more."/>
    <section class="relative -mt-40">
      <PostsCarousel sectionid="blog" sectiontitle="Blog" sectiondescription="Stay informed with the latest trends and developments in industrial automation. Explore our blog for thought-provoking articles, expert opinions, and practical tips to help your business stay ahead of the curve." :data='blogposts'/>
      <OneImageTextFlex sectionid="whitepapers" sectiontitle="Whitepapers" :item="whitepaper"/>
      <PostsCarousel sectionid="industry-insights" sectiontitle="Industry Insights" sectiondescription="Access exclusive industry insights and reports to stay informed about the latest news, developments, and opportunities in your sector. Stay ahead of the competition with actionable intelligence from AITS." :data='industryInsights'/>
      <!-- <WebinarsList sectiontitle="Webinars" :data='webinars'/> -->
      <InsideBody/>
    </section>    
</template>