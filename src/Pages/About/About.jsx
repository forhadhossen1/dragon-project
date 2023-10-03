import Header from "../Shared/Header/Header";

const About = () => {
    return (
        <div>
            <Header></Header>
             <div className="py-10">
            <h2 className="text-4xl font-bold text-center py-8">About Dragon News</h2>
            <p className="py-5"> 
                Dragon News is your reliable source for the latest and most comprehensive news coverage. We are committed to delivering accurate, unbiased, and insightful news stories that matter to you.
            </p>

            <h3 className="text-3xl font-semibold text-center py-8">Our Mission</h3>
            <p>
                At Dragon News, our mission is to keep you informed about the world is most significant events and developments. We strive to empower our viewers with knowledge, enabling them to make informed decisions and engage with the world around them.
            </p>

            <h3 className="text-3xl font-semibold text-center py-8">What Sets Us Apart</h3>
            <ul>
                <li className="py-5">
                    <strong>Unbiased Reporting:</strong> We uphold the highest standards of journalism ethics, ensuring that our news is free from bias, sensationalism, or misinformation.
                </li>
                <li className="py-5">
                    <strong>Diverse Coverage:</strong> From politics and economics to science, technology, and culture, we cover a wide range of topics to provide you with a holistic view of the world.
                </li>
                {/* Add more bullet points as needed */}
            </ul>

            {/* Add more sections and content as needed */}
            
            <h3 className="text-3xl font-semibold text-center py-8">Our Values</h3>
            <ul>
                <li className="py-5">
                    <strong>Accuracy:</strong> We believe in the importance of accurate and verified information in a rapidly changing world.
                </li>
                <li className="py-5">
                    <strong>Integrity:</strong> We maintain the highest ethical standards in our reporting.
                </li>
                <li className="py-5">
                    <strong>Transparency:</strong> We are committed to being open and transparent about our sources and methodologies.
                </li>
                <li className="py-5">
                    <strong>Community Engagement:</strong> We value our viewers  feedback and actively engage with our audience to better serve your information needs.
                </li>
            </ul>

            <h3 className="text-3xl font-semibold text-center py-8">Join Us</h3>
            <p>
                Stay connected with Dragon News by following us on social media and subscribing to our newsletter. We invite you to be a part of our informed community as we navigate the ever-evolving news landscape together.
            </p>

            <p className="py-5">
                Thank you for choosing Dragon News as your trusted source for news and information.
            </p>
        </div>
        </div>
    );
};

export default About;