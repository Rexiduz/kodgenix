import ProjectCard from '../sub/ProjectCard'
import clsx from '@/utils/clsx'

const styles = {
  container: 'flex flex-col items-center justify-center py-20',
  title: clsx(
    'text-[40px] font-semibold text-transparent py-20',
    'bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'
  ),
  row: clsx(
    'flex flex-wrap flex-row',
    // 'max-w-[1248px]',
    'max-w-[800px]'
  ),
  col: clsx(
    'mx-auto w-full mb-2 pb-2',
    'md:w-[calc(100%_/_2_-_16px)]'
    // '2xl:w-[400px]'
  )
}

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <h1 className={styles.title}>My Projects</h1>
      <div className="px-10">
        <div className={styles.row}>
          <div className={styles.col}>
            <ProjectCard
              src="/siwaporn-houses.png"
              title="Siwaporn Houses"
              imgCoverPosition="center top"
              href="https://siwaporn-houses.netlify.app/"
              description={
                'Siwaporn Houses specializes in designing and delivering custom-built and pre-fabricated modular homes. ' +
                'With efficient home delivery services, the company meets the needs of individuals seeking fast and hassle-free housing solutions.'
              }
            />
          </div>
          <div className={styles.col}>
            <ProjectCard
              src="/portfolio.png"
              title="KodGenix"
              imgCoverPosition="center top"
              description={
                'KodGenix is a Static Portfolio Website designed to showcase professional skills and projects. ' +
                'It provides a clean and visually appealing way for users to present their work and achievements.'
              }
            />
          </div>
          <div className={styles.col}>
            <ProjectCard
              src="/zqcargo.png"
              href="https://zq-cargo.com"
              title="ZQ Cargo"
              description={
                'ZQ Cargo is a Logistics Business Website & Web Application ' +
                'that streamlines shipping and transportation services. ' +
                'It offers users an efficient platform to manage and track their logistics operations seamlessly.'
              }
            />
          </div>
          <div className={styles.col}>
            <ProjectCard
              src="/fbcms.png"
              title="FB CMS"
              href="https://fbcms.netlify.app/"
              description={
                'The simplest CMS single-page application like Facebook. ' +
                'Let\'s try with username: "demo@fbcms.com" and password: "P@ssword"'
              }
            />
          </div>
          <div className={styles.col}>
            <ProjectCard
              src="/univest.png"
              title="Univest"
              href="https://univests.netlify.app/"
              description={
                "Univest is a website that aggregates users' asset values in one place, simplifying the analysis of their current investment status. " +
                'Investors who diversify their investments across multiple asset classes often spend considerable time analyzing their financial situation.' +
                'Univest offers a safe, user-friendly, and empowering personal portfolio analysis tool that saves investors valuable time.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
