import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, Meta } from "../../components/Work"
import Paragraph from "../../components/Paragraph"
import Article from "../../components/layouts/Article"

const Work = () => {
  return (
    <Article>
      <Container>
        <Box mt={50}>
          <Title>
            SWC binary failed to load <Badge>31-12-2021</Badge>
          </Title>
        </Box>
        <Paragraph>
          Every time you try to run your project locally, Next.js will throw an
          error. This is a known issue with Next.js 12, it uses a rust compiler
          to load SWC binaries and it's failing, to avoid this create a .babelrc
          file in your root directory and use the following script: {<br />}
          {`{"presets": ["next/babel"],}`}
          {<br />}
          This will set babel as your default compiler. To avoid using babel
          compiler in your production build, git ignore .babelrc and let vercel
          deploy a production build with rust compiler.
        </Paragraph>
        <List my={4}>
          <ListItem>
            <Meta>Read More</Meta>
            <Link href="https://nextjs.org/docs/messages/failed-loading-swc">
              Vercel <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Useful Links</Meta>
            <Link href="https://github.com/vercel/next.js/discussions/30468">
              Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Article>
  )
}

export default Work
