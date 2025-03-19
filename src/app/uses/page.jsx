import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <h3 className="font-thin">
        {title}
      </h3>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="15” ROG Strix G513"></Tool>
          <Tool title="AMD Ryzen 6800H with Radeon Graphics"></Tool>
          <Tool title="NVIDIA GeForce RTX3070 Ti Laptop GPU GDDR6 @ 8GB (256 bits)"></Tool>
        </ToolsSection>
        <ToolsSection title="Programming Languages">
          <Tool title="JavaScript"></Tool>
          <Tool title="Python"></Tool>
          <Tool title="PHP"></Tool>
          <Tool title="SQL"></Tool>
          <Tool title="HTML5"></Tool>
          <Tool title="CSS3"></Tool>
          <Tool title="SASS/SCSS"></Tool>
        </ToolsSection>
        <ToolsSection title="Databases">
          <Tool title="MySQL"></Tool>
          <Tool title="Firebase"></Tool>
          <Tool title="Supabase"></Tool>
          <Tool title="PostgreSQL"></Tool>
          <Tool title="SQLite"></Tool>
          <Tool title="NoSQL"></Tool>
        </ToolsSection>        
        <ToolsSection title="Design">
          <Tool title="Figma"></Tool>
          <Tool title="Adobe XD"></Tool>
          <Tool title="Adobe Photoshop"></Tool>  
          <Tool title="Adobe Lightroom"></Tool> 
          <Tool title="Adobe Illustrator"></Tool> 
          <Tool title="Adobe AfterEffects"></Tool>  
          <Tool title="Adobe Premier"></Tool>                                  
          <Tool title="Maya"></Tool>  
          <Tool title="Blender"></Tool>  
          <Tool title="3D Studio Max"></Tool>  
          <Tool title="Sketchup"></Tool>  
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Jira"></Tool>
          <Tool title="Slack"></Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
