<script setup>
import banner from '/images/banners/resources.webp'
import BlogCarousel from '@/components/BlogCarousel.vue';
import InnerHero from '../../components/InnerHero.vue';
import VisionandValues from '@/components/VisionandValues.vue';
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

</script>
<template>
    <main>
        <InnerHero :pagebanner="banner" pagename="Resources" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>
        <VisionandValues/>
        <BlogCarousel sectiontitle="Blogs" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :blogorindustryinsights='blogposts'/>
    </main>
</template>