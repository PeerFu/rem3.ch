import * as React from "react"
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Link, Flex } from "../components/ui"
import ChevronRight from "../components/chevron-right"
import * as styles from "../components/404.css"

export default function NotFound() {
  return (
    <Layout title="404">
      <Box paddingY={4}>
        <Container>
          <Flex variant="column">
            <Heading variant="mega" className={styles.heading}>
              404
            </Heading>
            <Heading as="h1">404</Heading>
            <Flex variant="column" gap={0}>
              <Text variant="lead" className={styles.text}>
                Seite nicht gefunden
              </Text>
              <Link to="/" className={styles.link}>
                <span>Zurück zur Startseite</span>
                <ChevronRight className={styles.linkChevron} />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}
