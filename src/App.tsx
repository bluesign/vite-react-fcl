import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import * as fcl from "@onflow/fcl"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + FCL!</p>
        <p>

        <button type="button" onClick={async ()  => {
          fcl.config()
          .put("accessNode.api", "https://access-testnet.onflow.org")
          .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn") 
        
        

          
            const response = await fcl.send([
              fcl.script(`pub fun main(): Int {
                return 21 + 21
            }
          `),
            ]);
            var r  = await fcl.decode(response);
            setCount(r)
          }
      }
        >
          FCL Execute Script
        </button>

        
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
