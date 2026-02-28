import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import skillData from '../../../public/json/skill.json';

const MarqueeSkill = () => {
    // Flatten all skills from all categories
    const allSkills = skillData.flatMap((category) => category.skills);

    return (
        <div className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 py-4 sm:py-6 md:py-8 lg:py-10'>
            <Marquee speed={40} gradient={false} pauseOnHover={true}>
                {allSkills.map((skill, index) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className='mx-4 sm:mx-6 md:mx-8 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 group cursor-pointer'
                    >
                        <div className='relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-lg sm:rounded-xl bg-muted/50 p-2 sm:p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-muted group-hover:shadow-lg'>
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                fill
                                className='object-contain p-2'
                                sizes='80px'
                            />
                        </div>
                        <p className='text-xs sm:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors'>
                            {skill.name}
                        </p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeSkill;
