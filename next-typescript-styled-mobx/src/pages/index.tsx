import { SFC } from 'react'

import { GetServerSideProps } from 'next'

import { inject, observer } from 'mobx-react'
import { ParsedUrlQuery } from 'querystring'
import { compose } from 'recompose'
import styled, { css, keyframes } from 'styled-components'

import Common from '@components/common/Common'

import { ExampleStore } from '@stores/ExampleStore'

interface Props {
  query: ParsedUrlQuery
  exampleStore: ExampleStore
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const animation = css`
  ${rotate} 2s linear infinite;
`

const PulseButton = styled.div`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  animation: ${animation};
`

const Home: SFC<Props> = ({ query, exampleStore }) => {
  const handleAdd = () => {
    exampleStore.add()
  }

  return (
    <>
      <Common />
      <p>{JSON.stringify(query, null, 2)}</p>
      <PulseButton>🧞‍♂️</PulseButton>

      <div>
        <p>{exampleStore.num}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={() => exampleStore.reset()}>Clear</button>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx

  return { props: { query } }
}

export default compose(
  inject(({ store }) => ({
    exampleStore: store.exampleStore,
  })),
  observer,
)(Home)
