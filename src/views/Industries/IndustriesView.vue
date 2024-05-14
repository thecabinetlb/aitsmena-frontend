<script setup>
import banner from '/images/banners/industries.webp'
import industriesiconF from '/images/industries/F&B.svg'
import industriesiconM from '/images/industries/manufactoring.svg'
import industriesiconC from '/images/industries/City.svg'
import industriesiconG from '/images/industries/Gas.svg'
import industriesiconU from '/images/industries/utilities.svg'
import industriesiconE from '/images/industries/energy.svg'
import InnerHero from '../../components/InnerHero.vue';
import IndustriesGrid from '../../components/IndustriesGrid.vue'
import Testimonials from '../../components/Testimonials.vue'
import InsideBody from '../../components/InsideBody.vue'
import PostsGrid from '../../components/PostsGrid.vue'
import { getSuccessStories } from '../../helpers/api'

const industries = [
{ id: 1, title: 'Smart Cities', description:'In an era of urbanization and sustainability, Smart Cities are at the forefront of innovation to enhance the quality of life for residents and optimize city operations. AITS is pioneering the transformation of urban landscapes by providing advanced software solutions that integrate information and communication technology (ICT) to drive efficiency, sustainability, and citizen-centric services. From smart infrastructure management to intelligent transportation systems and data-driven decision-making, AITS&apos;s solutions empower cities to harness the power of real-time data for better resource allocation, enhanced service delivery, and improved livability.', icon:industriesiconC },
{ id: 2, title: 'Food & Beverage', description:'The Food & Beverage industry faces unique challenges in ensuring product quality, safety, and compliance while meeting evolving consumer demands and regulatory requirements. AITS is revolutionizing the F&B sector with innovative software solutions designed to streamline production processes, enhance quality control, and ensure regulatory compliance. AITS&apos;s solutions provide end-to-end visibility and traceability, enabling F&B companies to optimize supply chain management, minimize waste, and deliver safe, high-quality products to consumers.', icon:industriesiconF },
{ id: 3, title: 'Manufacturing', description:'In today&apos;s competitive landscape, manufacturers face increasing pressure to improve efficiency, reduce costs, and maintain quality standards. AITS&apos;s advanced software solutions empower manufacturing companies to optimize production processes, minimize downtime, and enhance overall productivity. By leveraging real-time data analytics and automation technologies, AITS helps manufacturers streamline operations, increase output, and stay ahead of market demands, ultimately driving profitability and competitiveness in the industry', icon:industriesiconM },
{ id: 4, title: 'Oil & Gas', description:'The oil and gas industry operates in a complex environment characterized by volatile market conditions, stringent regulatory requirements, and evolving technological challenges. AITS provides tailored software solutions designed to address the unique needs of oil and gas companies, from upstream exploration and production to downstream refining and distribution. By enabling data-driven decision-making, asset optimization, and predictive maintenance, AITS helps oil and gas operators enhance operational efficiency, mitigate risks, and maximize profitability in a rapidly changing industry landscape.', icon:industriesiconG },
{ id: 5, title: 'Energy', description:'As the demand for energy continues to rise, energy companies are under pressure to improve sustainability, reliability, and cost-effectiveness in their operations. AITS offers innovative software solutions that enable energy providers to optimize energy generation, distribution, and management processes. By leveraging advanced analytics, predictive modeling, and IoT technologies, AITS helps energy companies enhance grid stability, reduce energy losses, and integrate renewable energy sources, ultimately driving towards a more sustainable and resilient energy future.', icon:industriesiconE },
{ id: 6, title: 'Utilities', description:'Utilities companies face challenges such as aging infrastructure, increasing demand for services, and regulatory compliance requirements. AITS&apos;s software solutions for utilities enable companies to optimize asset management, improve resource allocation, and enhance grid reliability. By leveraging IoT sensors, predictive analytics, and machine learning algorithms, AITS helps utilities companies detect and prevent equipment failures, optimize energy distribution, and enhance customer satisfaction in an evolving energy landscape.', icon:industriesiconU },
];

const successStories = getSuccessStories()
console.log(successStories)
</script>
<template>
    <main>
        <InnerHero :pagebanner="banner" pagename="Industries" 
        pagedescription="From Smart Cities to F&B, oil & gas, energy, transportation, and beyond, AITS offers tailored
        software solutions to meet the unique challenges faced by today's industries. Discover how
        our industry-specific solutions can drive success for your business"/>
        <section class="relative">
            <IndustriesGrid :data="industries"/>
            <!-- <Testimonials />
            <PostsGrid sectionid="success-stories" sectiontitle="Success Stories" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='successStories'/> -->
            <InsideBody/>
        </section>
 
    </main>
</template>