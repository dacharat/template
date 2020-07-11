import { useMemo } from 'react'

import { useStaticRendering } from 'mobx-react'

import { ExampleStore } from './ExampleStore'

const isServer = typeof window === 'undefined'

// tslint:disable-next-line: react-hooks-nesting
useStaticRendering(isServer)

let store = null

interface DataStoreProps {
  title: string
}

interface InitialState {
  dataStore: DataStoreProps
}

const fetchInitialStoreState = () => {
  if (isServer) {
    return {
      exampleStore: new ExampleStore(),
    }
  }
  if (store === null) {
    store = {
      exampleStore: new ExampleStore(),
    }
  }
  return store
}

// export default fetchInitialStoreState
export function useStore(initialState: InitialState) {
  const store = useMemo(() => fetchInitialStoreState(), [initialState])
  return store
}
