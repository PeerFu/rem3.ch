import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container } from "./ui"

export default function textblock(props) {
  return (
    <Section>
        <Container>          
            <div
            dangerouslySetInnerHTML={{
              __html: textblock.html,
            }}
          />
          </Container>
    </Section>
  )
}

export const query = graphql`
  fragment textblockContent on textblock {
    id
    html
  }
`

