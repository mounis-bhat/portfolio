import {
  Container,
  Badge,
  Link,
  List,
  ListItem
  //    Box
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import {
  Title,
  // WorkImage,
  Meta
} from "../../components/Work"
import Paragraph from "../../components/Paragraph"
import Article from "../../components/layouts/Article"

const Work = () => {
  return (
    <Article>
      <Container>
        <Title>
          Personal Portfolio <Badge>2021 - Present</Badge>
        </Title>
        <Paragraph>
          This is the application that you are browsing right now. It is a
          minimal portfolio that showcases some of the work I have done over the
          years!
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://mounis.vercel.app/" ml={5}>
              Mounis Bhat <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span style={{ marginLeft: "8px" }}>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span style={{ marginLeft: "34px" }}>
              Next JS, Chakra UI, Framer Motion
            </span>
          </ListItem>
        </List>
      </Container>
    </Article>
  )
}

export default Work
