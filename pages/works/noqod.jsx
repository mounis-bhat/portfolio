import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/Work"
import Paragraph from "../../components/Paragraph"
import Article from "../../components/layouts/Article"

const Work = () => {
  return (
    <Article>
      <Container>
        <Title>
          Noqod Admin <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Noqod Admin is a web application used for managing Noqod's mobile apps
          as well as web portals
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="http://staging.noqod.sd/">
              Noqod Admin <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React JS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/Noqod1.png" alt="Noqod" />
        <WorkImage src="/images/works/Noqod2.png" alt="Noqod" />
      </Container>
    </Article>
  )
}

export default Work
