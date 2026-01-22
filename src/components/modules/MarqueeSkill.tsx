import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import skillData from '../../../public/json/skill.json';

const MarqueeSkill = () => {
    // Flatten all skills from all categories
    const allSkills = skillData.flatMap((category) => category.skills);

    return (
        <div className='mt-16 py-10'>
            <Marquee speed={40} gradient={false} pauseOnHover={true}>
                {allSkills.map((skill, index) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className='mx-8 flex flex-col items-center gap-4 group cursor-pointer'
                    >
                        <div className='relative h-20 w-20 rounded-xl bg-muted/50 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-muted group-hover:shadow-lg'>
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                fill
                                className='object-contain p-2'
                            />
                        </div>
                        <p className='text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors'>
                            {skill.name}
                        </p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeSkill;
