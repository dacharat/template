import { GetServerSideProps } from 'next'
import Common from '@components/common/Common'
import styled, { css, keyframes } from 'styled-components'

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

const Home = ({ query }) => {
  return (
    <>
      <Common />
      <p>{JSON.stringify(query, null, 2)}</p>
      <PulseButton>🧞‍♂️</PulseButton>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx

  return { props: { query } }
}

export default Home
