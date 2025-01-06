import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
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
          <Tool title="15” ROG Strix G513">
            I'm using an AMD-based 15” ROG Strix G513 Gaming Laptop for programming, and photo and video post production.
          </Tool>
          <Tool title="AMD Ryzen 6800H with Radeon Graphics">
          The AMD Ryzen 7 6800H is a high-performance 8-core, 16-thread mobile processor designed for gaming laptops, content creation, and productivity. Built on AMD's Zen 3+ architecture and 6nm process technology, it delivers excellent efficiency and performance.
          </Tool>
          <Tool title="NVIDIA GeForce RTX3070 Ti Laptop GPU GDDR6 @ 8GB (256 bits)">
          a high-performance mobile graphics card based on the Ampere architecture, designed for gaming, content creation, and AI-powered workloads. It delivers excellent performance in 1440p and 1080p gaming, ray tracing, and GPU-accelerated tasks.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
          a lightweight yet powerful open-source code editor developed by Microsoft. It is widely used for software development, web development, scripting, and debugging across various programming languages.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
          a cloud-based design and prototyping tool used primarily for UI/UX design. It's widely popular among web and app designers for its real-time collaboration features and intuitive interface. Unlike traditional design software, Figma operates entirely in the browser (though desktop apps are also available), making it ideal for teams working in distributed or remote environments.
          </Tool>
          <Tool title="Adobe Photoshop">
          the industry-leading raster graphics editor developed by Adobe Inc. It is widely used for photo editing, digital painting, graphic design, and compositing. With a vast range of powerful tools, Photoshop is essential for professionals and hobbyists in photography, web design, branding, and digital art.
          </Tool>  
          <Tool title="Adobe Illustrator">
          a vector graphics editor developed by Adobe Inc., primarily used for creating scalable illustrations, logos, icons, typography, and more. Illustrator is the go-to tool for graphic design, offering a powerful set of tools for creating crisp, resolution-independent artwork that can be resized without losing quality.
          </Tool> 
          <Tool title="Adobe AfterEffects">
          a motion graphics and visual effects software developed by Adobe Inc. It is used primarily for video post-production, enabling users to create stunning animations, visual effects, and motion graphics. From simple titles and lower-thirds to complex 3D compositions, After Effects is a powerful tool for creating cinematic effects and animations.
          </Tool>  
          <Tool title="Adobe Premier">
          a professional video editing software developed by Adobe Inc., widely used in film, television, and web content production. It offers a comprehensive set of tools for editing, color correction, audio post-production, and finalizing videos. Premiere Pro is known for its flexibility, speed, and integration with other Adobe products, making it a go-to choice for both beginner and professional video editors.
          </Tool>                                  
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Jira">
          a comprehensive project management and issue tracking software developed by Atlassian. It is primarily used by Agile teams for planning, tracking, and managing software development projects, but its capabilities extend to managing various types of tasks, projects, and workflows. With customizable features, Jira is particularly popular in Agile, Scrum, and Kanban methodologies.
          </Tool>
          <Tool title="Slack">
          a collaboration and communication platform designed to streamline team communication and improve productivity. It combines instant messaging, file sharing, and a variety of integrations to help teams collaborate more effectively, whether working in-office or remotely. Slack is widely used across industries for its simplicity, flexibility, and powerful integrations.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
