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
          Noqod Admin <Badge>2021 - Present</Badge>
        </Title>
        <Paragraph>
          It is an admin panel for Noqod, a web application for managing all the
          operations of the company. I have actively worked on this project for
          about six months and it is still in development.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="http://access.noqod.com.sd/" ml={5}>
              Noqod Admin <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span style={{ marginLeft: "8px" }}>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span style={{ marginLeft: "34px" }}>React JS</span>
          </ListItem>
        </List>
      </Container>

      <Container>
        <Title>
          Noqod Backend <Badge>2021 - Present</Badge>
        </Title>
        <Paragraph>
          It is a node backend for Noqod, it is a monorepo handles all the
          routes used in Noqod Mobile and Web Apps
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <span style={{ marginLeft: "20px" }}>NA</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span style={{ marginLeft: "8px" }}>Node</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span style={{ marginLeft: "34px" }}>Fastify</span>
          </ListItem>
        </List>
      </Container>

      <Container>
        <Title>
          Noqod Merchant <Badge>2021 - Present</Badge>
        </Title>
        <Paragraph>
          It is an admin panel for the merchants of Noqod ecosystem, a web app
          for managing all the transcations and profile of the user.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="http://npg.noqod.com.sd/" ml={5}>
              Noqod Merchant <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span style={{ marginLeft: "8px" }}>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span style={{ marginLeft: "34px" }}>React JS</span>
          </ListItem>
        </List>
      </Container>
    </Article>
  )
}

export default Work
