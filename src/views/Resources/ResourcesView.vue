<script setup>
import banner from '/images/banners/resources.webp'
import PostsCarousel from '../../components/PostsCarousel.vue';
import InnerHero from '../../components/InnerHero.vue';
import InsideBody from '../../components/InsideBody.vue';
import ImageTextFlex from '../../components/ImageTextFlex.vue';
import WebinarsList from '../../components/WebinarsList.vue';

const blogposts = [
  { id: 1, title: 'The Impact of Industrial Digitization on Manufacturing Efficiency', summary: 'Explore how industrial digitization is revolutionizing manufacturing processes and improving efficiency.', to: 'https://example.com/post1', target: '_blank', date: '2024-04-26' },
  { id: 2, title: 'Challenges and Opportunities in Industrial Digitization', summary: 'Discover the key challenges faced and opportunities unlocked by the adoption of industrial digitization technologies.', to: 'https://example.com/post2', target: '_blank', date: '2024-04-25' },
  { id: 3, title: 'Implementing Industrial IoT for Smart Factories', summary: 'Learn how Industrial Internet of Things (IIoT) is transforming traditional factories into smart, connected environments.', to: 'https://example.com/post3', target: '_blank', date: '2024-04-24' },
  { id: 4, title: 'Data Analytics in Industrial Digitization', summary: 'Discover how data analytics is driving insights and optimizations in industrial processes through digitization initiatives.', to: 'https://example.com/post4', target: '_blank', date: '2024-04-23' },
  { id: 5, title: 'Cybersecurity Considerations for Industrial Digitization', summary: 'Explore the importance of cybersecurity measures in safeguarding industrial digitization systems and infrastructure.', to: 'https://example.com/post5', target: '_blank', date: '2024-04-22' },
  { id: 6, title: 'The Role of Artificial Intelligence in Industrial Automation', summary: 'Learn how artificial intelligence technologies are powering automation and optimization in industrial processes.', to: 'https://example.com/post6', target: '_blank', date: '2024-04-21' },
  { id: 7, title: 'Digital Twin Technology in Industrial Applications', summary: 'Discover how digital twin technology is enabling predictive maintenance and virtual simulations in industrial settings.', to: 'https://example.com/post7', target: '_blank', date: '2024-04-20' },
  { id: 8, title: 'Scaling Up: Strategies for Successful Industrial Digitization Implementation', summary: 'Explore strategies for effectively scaling up industrial digitization initiatives and achieving sustainable growth.', to: 'https://example.com/post8', target: '_blank', date: '2024-04-19' },
];
const whitepaper = [
  { 
    id: 1, 
    title: 'Explore AITS Whitepapers for Innovation', 
    description: 'Discover cutting-edge insights and transformative ideas in our collection of whitepapers. Dive deep into industry trends, emerging technologies, and best practices to propel your business forward.', 
    to:'/whitepapers', 
    image:'/images/insidepages/resources/whitepapers.webp' 
  }
];
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
  { 
    id: 6, 
    title: 'Transforming Power Grids with Smart Technology', 
    summary: 'Learn about the integration of smart meters and grid automation in modernizing power distribution networks and enhancing reliability.', 
    to: 'https://example.com/power-utilities-insights', 
    target: '_blank', 
    date: '2024-04-21',
    category: "Power & Utilities"
  },
  { 
    id: 7, 
    title: 'Advancements in Pharmaceutical Manufacturing', 
    summary: 'Explore how advancements in automation and data analytics are driving efficiency and compliance in pharmaceutical manufacturing.', 
    to: 'https://example.com/life-science-insights', 
    target: '_blank', 
    date: '2024-04-20',
    category: "Life Science"
  },
  { 
    id: 8, 
    title: 'Digitization Trends in Mining Operations', 
    summary: 'Discover how digital technologies are optimizing mining operations, from exploration to extraction, and improving safety and productivity.', 
    to: 'https://example.com/mining-digitization-insights', 
    target: '_blank', 
    date: '2024-04-19',
    category: "Metals, Mining, & Minerals"
  },
];
const webinars = [
  { 
    date: { day: 15, month: "May", year: 2024 },
    title: "Harnessing AI for Industrial Efficiency",
    description: "Explore the transformative potential of artificial intelligence in optimizing industrial processes and increasing efficiency.",
    to: "/webinar/harnessing-ai",
    target: "_blank"
  },
  { 
    date: { day: 22, month: "May", year: 2024 },
    title: "IoT Solutions for Smart Manufacturing",
    description: "Discover how Internet of Things (IoT) technologies are revolutionizing manufacturing operations and enabling predictive maintenance.",
    to: "/webinar/iot-smart-manufacturing",
    target: "_blank"
  },
  { 
    date: { day: 29, month: "May", year: 2024 },
    title: "Blockchain Applications in Supply Chain Management",
    description: "Learn about the role of blockchain technology in enhancing transparency and traceability in industrial supply chains.",
    to: "/webinar/blockchain-supply-chain",
    target: "_blank"
  },
  { 
    date: { day: 5, month: "June", year: 2024 },
    title: "Advanced Robotics in Manufacturing",
    description: "Discover the latest advancements in robotics technology and its applications in modern manufacturing.",
    to: "/webinar/advanced-robotics",
    target: "_blank"
  },
  { 
    date: { day: 12, month: "June", year: 2024 },
    title: "Sustainability in Industrial Operations",
    description: "Learn about sustainable practices and technologies driving environmental stewardship in industrial operations.",
    to: "/webinar/sustainability-industrial",
    target: "_blank"
  },
  { 
    date: { day: 19, month: "June", year: 2024 },
    title: "Future of Digital Twin Technology",
    description: "Explore the potential of digital twin technology in revolutionizing product design, testing, and maintenance.",
    to: "/webinar/digital-twin-future",
    target: "_blank"
  }
];

</script>
<template>
    <main class="relative overflow-hidden">
      <InnerHero :pagebanner="banner" pagename="Resources" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>

      <section class="-mt-40 before:absolute before:inset-0 before:w-full before:h-11/12 before:transform before:bg-center before:bg-cover before:z-[-1] before:sm:bg-colors before:bg-mobilecolors">
        <PostsCarousel sectiontitle="Featured Blogs" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='blogposts'/>
        <ImageTextFlex sectiontitle="Whitepapers" :data="whitepaper"/>
        <PostsCarousel sectiontitle="Featured Industry Insights" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='industryInsights'/>
        <WebinarsList sectiontitle="Webinars" :data='webinars'/>
      </section>    
    </main>
</template>